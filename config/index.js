const server = require('./server')
const config = require('./config')
const axios = require('./axios')
module.exports = {
  httpHost: server.httpHost,
  httpPort: server.httpPort,
  baseURL: config.baseURL,
  pathURI: config.pathURI,
  defaultWidth: config.width,
  defaultHeight: config.height,
  defaultQuality: config.quality,
  defaultFormat: config.format,
  defaultFit: config.fit,
  originalFolder: config.originalFolder,
  destinationFolder: config.destinationFolder,
  allowFormat: config.allowFormat,
  jpegOptions: config.jpegOptions,
  webpOptions: config.webpOptions,
  axiosConfig: axios.axiosConfig
}
