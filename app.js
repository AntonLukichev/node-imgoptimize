const axios = require('axios')
const sharp = require('sharp')
const qs = require('querystring')
const fs = require('fs')
const path = require('path')

const fastify = require('fastify')({
  logger: true
})
const CONFIG = require('./config')

fastify.register(require('fastify-url-data'), (err) => { if (err) throw err })
fastify.register(require('fastify-response-time'))
fastify.register(require('fastify-static'), { root: __dirname })

fastify.get('/ping', async (req, rep) => {
  return { pong: true }
})

fastify.get('/test', async (req, rep) => {
  const img = await processingImg(
    { w: 1500, h: null, q: 100 },
    'C:\\_GIT\\imgresizer\\src_img\\getmedia\\284af62e-ae99-4273-b153-6d0bac746ec4\\18-081-17_2500x540',
    'test.webp',
    true)
  console.log(img)
  await rep.sendFile('test.webp')
})

const parseReq = (url) => {
  let data = {}
  data.filename = url.path
  data.query = qs.parse(url.query)
  data.img = {}
  data.img.w = parseInt(data.query.width) || parseInt(data.query.w) || CONFIG.defaultWidth
  data.img.h = parseInt(data.query.height) || parseInt(data.query.h) || CONFIG.defaultHeight
  data.img.q = parseInt(data.query.quality) || parseInt(data.query.q) || CONFIG.defaultQuality
  return data
}

const isFileExists = (filename) => {
  return fs.existsSync(filename)
}

const isAcceptWebp = (accept) => {
  const patternWebp = /image\/webp/
  return !!accept.match(patternWebp)
}

const getSourceFilename = (reqImg) => {
  const filename = path.parse(reqImg.filename)
  return path.join(
    /* __dirname,
    CONFIG.originalFolder,
    filename.dir, */
    filename.base
  )
}

const getDestFileName = (reqImg, acceptWebp) => {
  const filename = reqImg.filename
  const img = reqImg.img
  const imgW = img.w ? `_w${img.w}_` : ``
  const imgH = img.h ? `_h${img.h}_` : ``
  const imgQ = img.q ? `q${img.q}.` : `.`
  const ext = acceptWebp ? 'webp' : 'jpeg'
  // ToDo add another formats
  const destFile = path.join(
    /* __dirname,
    CONFIG.destinationFolder,
    path.parse(filename).dir, */
    path.parse(filename).name + imgW + imgH + imgQ + ext)
  return destFile
}

const isAllowFile = (contentType) => {
  // !contentType.startsWith('image/')
  return CONFIG.allowTypes.includes(contentType)
}

const createDir = (filename) => {
  fs.mkdirSync(path.parse(filename).dir, { recursive: true })
}

const axiosGetFile = axios.create(CONFIG.axiosConfig)
const axiosGetImg = async (imgUrl, saveImgFile) => {
  let answer = false
  try {
    createDir(saveImgFile)
    await axiosGetFile(imgUrl)
      .then((response) => {
        response.data.pipe(fs.createWriteStream(saveImgFile))
        console.log(`download complete ${imgUrl} -> ${response.status} ${response.headers['content-length']}`)
        answer = true
      })
  } catch (error) {
    if (error.response) {
      console.error(error.response.data)
      console.error(error.response.status)
    } else if (error.request) {
      console.error(error.request)
    } else {
      console.error(error.message)
    }
    console.error(`axiosGetImg ${imgUrl}`, error.config)
  }
  return answer
}
const downloadSourceFile = (reqUrl, saveFilename) => {
  const url = CONFIG.baseURL + reqUrl
  return axiosGetImg(url, saveFilename)
}

const processingImg = async (reqImg, sourceFilename, destFilename, acceptWebp) => {
  const imgOptions = {
    width: reqImg.w,
    height: reqImg.h,
    quality: reqImg.q,
    fit: CONFIG.defaultFit
  }
  /* const readable = fs.createReadStream(sourceFilename)
  const writable = fs.createWriteStream(destFilename)
  writable.on('finish', function () {
    console.log('done write file')
  }) */
  // const inputBuffer = fs.readFileSync(sourceFilename)
  let successful = false
  let options = {}
  let imgFormat = 'jpeg'
  switch (acceptWebp) {
    case true:
      options = { ...CONFIG.webpOptions }
      imgFormat = 'webp'
      break
    default:
      options = { ...CONFIG.jpegOptions }
      break
  }
  // console.log(inputBuffer)
  sharp(sourceFilename)
    .resize(imgOptions)
    .toFormat(imgFormat, options)
    .toFile(destFilename)
    .then(info => {
      fastify.log.info(info)
      successful = true
    })
    .catch(err => {
      fastify.log.error(err)
    })
  return successful
}

fastify.get(`${CONFIG.pathURI}*`, async (req, rep) => {
  const urlData = req.urlData() // parse parameters
  const reqImg = parseReq(urlData)
  const acceptWebp = isAcceptWebp(req.headers.accept)
  const sourceFilename = getSourceFilename(reqImg)
  const destFilename = getDestFileName(reqImg, acceptWebp)
  if (isFileExists(destFilename)) { // check cache file
    rep.sendFile(destFilename)// return file
  } else {
    if (await downloadSourceFile(reqImg.filename, sourceFilename)) {
      const imgResults = await processingImg(reqImg.img, sourceFilename, destFilename, acceptWebp)
      // await rep.sendFile(destFilename)

      /* } else {
        return {
          error: true,
          status: `Error processing image ${destFilename}`
        } */
      return {
        path: urlData.path,
        query: urlData.query,
        headers: req.headers.accept,
        reqImg: reqImg,
        sourceFilename: sourceFilename,
        destFilename: destFilename,
        isFileExists: isFileExists(sourceFilename),
        imgResults: imgResults
      }
    }
    /* } else {
      return {
        error: true,
        status: `Error download original file ${reqImg.filename}`
      }
    } */
  }
})
/*
fastify.get('/', options, async function (request, reply) {
  var data = await getData()
  var processed = await processData(data)
  reply.send(processed)
})
*/

const start = async () => {
  try {
    await fastify.listen(CONFIG.httpPort, CONFIG.httpHost, (err, address) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
