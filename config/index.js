const server = require('./server')
const config = require('./config')
module.exports = {
  httpHost: server.httpHost,
  httpPort: server.httpPort,
  pathURI: config.pathURI,
  defaultWidth: config.width,
  defaultHeight: config.height,
  defaultQuality: config.quality,
  originalFolder: config.originalFolder,
  destinationFolder: config.destinationFolder
}
