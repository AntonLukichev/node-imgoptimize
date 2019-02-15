//  const axios = require('axios')
//  const sharp = require('sharp')
const qs = require('querystring')
const fs = require('fs')
const path = require('path')
//  const CONFIG = require('./config')

const fastify = require('fastify')({
  logger: true
})
const CONFIG = require('./config')

fastify.register(require('fastify-url-data'), (err) => {
  if (err) throw err
})
fastify.register(require('fastify-response-time'))

fastify.get('/ping', async (req, rep) => {
  return { pong: true }
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

const isFileExists = (filename, img, acceptWebp) => {
  const ext = acceptWebp ? '.jpeg' : '.webp'
  const destFile = path.join(CONFIG.destinationFolder, path.parse(filename).dir, path.parse(filename).name + `_w${img.w}_` + `h${img.h}_` + `q${img.q}` + ext)
  // ToDo add requred extention from request headers
  return fs.existsSync(destFile)
}

const isAcceptWebp = (accept) => {
  return false
}

fastify.get(`${CONFIG.pathURI}*`, async (req, rep) => {
  const urlData = req.urlData()
  // parse parameters
  const reqFile = parseReq(urlData)
  const acceptWebp = isAcceptWebp(req.headers.accept)
  // check cache file
  // if (!checkCache)
  //   download file
  //   check headers
  //   prepare file
  // else return file
  return {
    path: urlData.path,
    query: urlData.query,
    headers: req.headers.accept,
    reqFile: reqFile,
    isFileExists: isFileExists(reqFile.filename, reqFile.img, acceptWebp)
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
    await fastify.listen(CONFIG.httpPort, (err, address) => {
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
