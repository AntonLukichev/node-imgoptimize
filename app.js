#!/usr/bin/env nodejs
const routes = require('./routes')
const CONFIG = require('./config')
const swagger = require('./config/swagger')
const mainController = require('./controllers/mainController')
const fastify = require('fastify')({ logger: { level: CONFIG.logLevel } })
if (CONFIG.sentryDsn) {
  const Sentry = require('@sentry/node')
  let sentryDebug = false
  if (process.env.NODE_ENV === 'development') sentryDebug = true
  Sentry.init({
    dsn: CONFIG.sentryDsn,
    release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
    debug: sentryDebug,
    serverName: process.env.COMPUTERNAME
  })
  fastify.setErrorHandler((err, req, reply) => {
    Sentry.withScope(scope => {
      scope.setUser({
        ip_address: req.raw.ip
      })
      scope.setTag('path', req.raw.url)
      scope.addEventProcessor(event => Sentry.Handlers.parseRequest(event, req))
      Sentry.captureException(err)
    })
  })
}
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

routes.forEach((route) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || CONFIG.httpPort, CONFIG.httpHost, (err, address) => {
      if (err) {
        console.error(err)
      } else {
        console.log(`Server listening on ${address}`)
      }
    })
    fastify.swagger()
  } catch (err) {
    console.log('Error starting server:', err)
    process.exit(1)
  }
}

start()
