const CONFIG = require('../config')
const boom = require('@hapi/boom')
const fastify = require('fastify')({ logger: { level: CONFIG.logLevel } })
const mainController = require('./mainController')

exports.getFile = async (req, reply) => {
  try {
    const id = req.params.id
    const body = req.body
    const file = {
      id: id,
      body: body
    }
    fastify.log.info('getFile', file)
    const savefile = await (mainController.getDownloadFileV3(id, body.url, body.filename))
    return savefile
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.sharpImage = async (req, reply) => {
  try {
    // const fileId = req.params.id
    const options = req.body
    // await (req) => {}
    return options
  } catch (err) {
    throw boom.boomify(err)
  }
}
