const fs = require('fs')
const { COPYFILE_EXCL } = fs.constants

try {
  fs.copyFileSync('./config/config.example.js', './config/config.js', COPYFILE_EXCL)
  fs.copyFileSync('./config/server.example.js', './config/server.js', COPYFILE_EXCL)
} catch (e) {}

const server = require('./server')
const config = require('./config')
const axios = require('./axios')
module.exports = {
  httpHost: server.httpHost,
  httpPort: server.httpPort,
  logLevel: server.logLevel,
  baseURL: config.baseURL,
  pathURI: config.pathURI,
  defaultWidth: config.width,
  defaultHeight: config.height,
  defaultQuality: config.quality,
  defaultFormat: config.format,
  defaultFit: config.fit,
  sourceFolder: config.sourceFolder,
  destinationFolder: config.destinationFolder,
  allowFormat: config.allowFormat,
  jpegOptions: config.jpegOptions,
  webpOptions: config.webpOptions,
  axiosConfig: axios.axiosConfig
}
