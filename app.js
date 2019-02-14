const fastify = require('fastify')({
  logger: true
})
//  const axios = require('axios')
//  const sharp = require('sharp')
//  const querystring = require('querystring');
//  const fs = require('fs');
const CONFIG = require('./config')

fastify.register(require('fastify-url-data'), (err) => {
  if (err) throw err
})

fastify.get('/', async (req, rep) => {
  const urlData = req.urlData()
  req.log.info(urlData.path)
  req.log.info(urlData.query)

  return { hello: 'world' }
})

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
