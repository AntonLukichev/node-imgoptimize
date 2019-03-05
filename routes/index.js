const apiController = require('../controllers/apiController')
const mainController = require('../controllers/mainController')
const schema = require('../schemas')
const CONFIG = require('../config')

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
  },
  {
    method: 'GET',
    url: '/api/test/*',
    handler: mainController.getImageV3
  }
]

CONFIG.pathURI.forEach((pathURI, index) => {
  routes.push({
    method: 'GET',
    url: pathURI + '*',
    handler: mainController.getImage
  })
})

module.exports = routes
