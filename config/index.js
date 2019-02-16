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
  defaultFit: config.fit,
  originalFolder: config.originalFolder,
  destinationFolder: config.destinationFolder,
  allowTypes: config.allowTypes,
  jpegOptions: config.jpegOptions,
  webpOptions: config.webpOptions,
  axiosConfig: axios.axiosConfig
}
