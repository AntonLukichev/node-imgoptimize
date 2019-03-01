const boom = require('boom')

exports.getFile = async (req, reply) => {
  try {
    const id = req.params.id
    const file = {
      id: id
    }
    // await (req) => {}
    return file
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.sharpImage = async (req, reply) => {
  try {
    const fileId = req.params.id
    const options = req.body
    // await (req) => {}
    return options
  } catch (err) {
    throw boom.boomify(err)
  }
}
