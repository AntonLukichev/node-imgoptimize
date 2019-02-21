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
  rep.send({ pong: true })
})

const getFormat = (format) => {
  return CONFIG.allowFormat.includes(format) ? format : CONFIG.defaultFormat
}

const parseReq = (url, acceptWebp) => {
  let data = {}
  data.uri = url.path
  data.query = qs.parse(url.query)
  data.img = {}
  data.img.w = parseInt(data.query.width) || parseInt(data.query.w) || CONFIG.defaultWidth
  data.img.h = parseInt(data.query.height) || parseInt(data.query.h) || CONFIG.defaultHeight
  data.img.q = parseInt(data.query.quality) || parseInt(data.query.q) || CONFIG.defaultQuality
  data.img.f = data.query.format || data.query.f
  if (acceptWebp && !data.img.f) {
    data.img.f = 'webp'
  } else {
    data.img.f = getFormat(data.img.f)
  }
  return data
}

const isFileExists = (filename) => {
  return fs.existsSync(filename)
}

const getFileSize = (filePath) => {
  const stat = fs.statSync(filePath)
  const size = stat.size
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i]
}

const isAcceptWebp = (accept) => {
  const patternWebp = /image\/webp/
  return !!accept.match(patternWebp)
}

const getSourceFilename = (reqImg) => {
  const filename = path.parse(reqImg.uri)
  return path.join(
    /* __dirname,
    CONFIG.originalFolder,
    filename.dir, */
    filename.base
  )
}

const getDestFileName = (reqImg) => {
  const filename = reqImg.uri
  const img = reqImg.img
  const imgW = img.w ? `_w${img.w}_` : ``
  const imgH = img.h ? `_h${img.h}_` : ``
  const imgQ = img.q ? `q${img.q}.` : `.`
  const ext = img.f
  // ToDo add another formats
  return path.join(
    /* __dirname,
    CONFIG.destinationFolder,
    path.parse(filename).dir, */
    path.parse(filename).name + imgW + imgH + imgQ + ext)
}

const isAllowFile = (contentType) => {
  // !contentType.startsWith('image/')
  return CONFIG.allowTypes.includes(contentType)
}

const createDir = (filename) => {
  if (path.parse(filename).dir) {
    fs.mkdirSync(path.parse(filename).dir, { recursive: true })
  }
}

const processingImg = async (settings, rep) => {
  const imgOptions = {
    width: settings.img.w,
    height: settings.img.h,
    quality: settings.img.q,
    fit: CONFIG.defaultFit
  }
  let successful = false
  let options = {}
  let imgFormat = 'jpeg'
  switch (settings.webp) {
    case true:
      options = { ...CONFIG.webpOptions }
      imgFormat = 'webp'
      break
    default:
      options = { ...CONFIG.jpegOptions }
      break
  }
  createDir(settings.destination)
  sharp(settings.source)
    .resize(imgOptions)
    .toFormat(imgFormat, options)
    .toFile(settings.destination)
    .then(info => {
      fastify.log.info(info)
      successful = true
      rep.sendFile(settings.destination)
    })
    .catch(err => {
      fastify.log.error(err)
    })
  return successful
}

const getDownloadFile = async (settings, rep) => {
  const axiosGetFile = axios.create(CONFIG.axiosConfig)
  const writeStream = fs.createWriteStream(settings.source)
  writeStream.on('finish', () => {
    console.log('save file finish')
    return processingImg(settings, rep)
  })
  const respData = await axiosGetFile(settings.url)
    .then(async (response) => {
      console.log(`download complete ${settings.url} -> ${response.status} ${response.headers['content-length']} ${response.headers['content-type']}`)
      response.data.pipe(writeStream)
      return response.data
    })
    .catch((error) => {
      console.error(error)
      rep.send(error)
    })
  return respData
}

const getSettings = (req) => {
  const urlData = req.urlData()
  const acceptWebp = isAcceptWebp(req.headers.accept)
  const reqImg = parseReq(urlData, acceptWebp)
  const downFile = CONFIG.baseURL + reqImg.uri

  const sourceFilename = getSourceFilename(reqImg)
  const destFilename = getDestFileName(reqImg, acceptWebp)

  return {
    url: downFile,
    img: reqImg.img,
    source: sourceFilename,
    destination: destFilename,
    webp: acceptWebp
  }
}

fastify.get(`${CONFIG.pathURI}*`, async (req, rep) => {
  const settings = getSettings(req)

  if (isFileExists(settings.destination)) {
    console.log('img exists')
    rep.sendFile(settings.destination)
  } else {
    await getDownloadFile(settings, rep)
  }
})

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
