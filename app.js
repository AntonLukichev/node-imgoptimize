#!/usr/bin/env nodejs
const routes = require('./routes')
const CONFIG = require('./config')
const swagger = require('./config/swagger')
const mainController = require('./controllers/mainController')
const fastify = require('fastify')({ logger: { level: CONFIG.logLevel } })
// fastify.register(require('fastify-response-time'))   error  fastify-response-time\index.js:60    Cannot convert undefined or null to object
fastify.register(require('fastify-static'), { root: __dirname })
fastify.register(require('fastify-swagger'), swagger.options)

const startCheck = () => {
  try {
    mainController.createFolder(CONFIG.sourceFolder)
    mainController.createFolder(CONFIG.destinationFolder)
  } catch (e) {
    fastify.log.error('can\'t create folder from config', e)
    process.exit(1)
  }
}
startCheck()

routes.forEach((route, index) => {
  fastify.route(route)
})

const start = async () => {
  try {
    // eslint-disable-next-line handle-callback-err
    await fastify.listen(process.env.PORT || CONFIG.httpPort, CONFIG.httpHost, (err, address) => {
      console.log(`Server listening on ${address}`)
    })
    fastify.swagger()
  } catch (err) {
    console.log('Error starting server:', err)
    process.exit(1)
  }
}

start()
