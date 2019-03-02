const boom = require('boom')

exports.getFile = async (req, reply) => {
  try {
    const id = req.params.id
    const body = req.body
    console.log(body)
    const file = {
      id: id,
      body: body
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
