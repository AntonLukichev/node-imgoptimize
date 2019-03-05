const axios = require('axios')
const sharp = require('sharp')
const qs = require('querystring')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const boom = require('boom')
const mainController = require('./controllers/mainController')

const fastify = require('fastify')({
  logger: true
})

const startCheck = () => {
  try {
    fs.accessSync('./config/config.js', fs.constants.R_OK)
    fs.accessSync('./config/server.js', fs.constants.R_OK)
  } catch (e) {
    console.error('can\'t read config files', e)
    process.exit(1)
  }
}
startCheck()

const routes = require('./routes')
const CONFIG = require('./config')
const swagger = require('./config/swagger')

fastify.register(require('fastify-url-data'), (err) => { if (err) throw err })
// fastify.register(require('fastify-response-time'))   error  fastify-response-time\index.js:60    Cannot convert undefined or null to object
fastify.register(require('fastify-static'), { root: __dirname })
fastify.register(require('fastify-swagger'), swagger.options)

routes.forEach((route, index) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen(CONFIG.httpPort, CONFIG.httpHost, (err, address) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    })
    fastify.swagger()
    try {
      mainController.createFolder(CONFIG.sourceFolder)
      mainController.createFolder(CONFIG.destinationFolder)
    } catch (e) {
      console.error('can\'t create folder from config', e)
      process.exit(1)
    }
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
