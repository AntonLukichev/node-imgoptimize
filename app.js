#!/usr/bin/env nodejs
const fs = require('fs')
const routes = require('./routes')
const CONFIG = require('./config')
const swagger = require('./config/swagger')
const mainController = require('./controllers/mainController')
const fastify = require('fastify')({ logger: true })
// fastify.register(require('fastify-response-time'))   error  fastify-response-time\index.js:60    Cannot convert undefined or null to object
fastify.register(require('fastify-static'), { root: __dirname })
fastify.register(require('fastify-swagger'), swagger.options)

const startCheck = () => {
  try {
    mainController.createFolder(CONFIG.sourceFolder)
    mainController.createFolder(CONFIG.destinationFolder)
  } catch (e) {
    console.error('can\'t create folder from config', e)
    process.exit(1)
  }
  try {
    fs.accessSync('./config/config.js', fs.constants.R_OK)
    fs.accessSync('./config/server.js', fs.constants.R_OK)
  } catch (e) {
    console.error('can\'t read config files', e)
    process.exit(1)
  }
}
startCheck()

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
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
