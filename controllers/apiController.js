const boom = require('boom')

exports.getFile = async (req, reply) => {
  try {
    const id = req.params.id
    const file = {
      id: id
    } // await (req) => {}
    return file
  } catch (err) {
    throw boom.boomify(err)
  }
}
