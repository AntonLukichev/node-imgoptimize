const apiController = require('../controllers/apiController')

const routes = [
  {
    method: 'GET',
    url: '/api/file/:id',
    handler: apiController.getFile
  }
]

module.exports = routes