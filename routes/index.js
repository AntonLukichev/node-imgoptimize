const apiController = require('../controllers/apiController')
const schema = require('../schemas')

const routes = [
  {
    method: 'POST',
    url: '/api/file/:id',
    schema: schema.getFile,
    handler: apiController.getFile
  },
  {
    method: 'POST',
    url: '/api/image/:id',
    handler: apiController.sharpImage
  }
]

module.exports = routes
