const server = require('./server')

exports.options = {
  routePrefix: '/swagger',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Imgresizer API',
      description: 'Proxy server for image resizing on Node.JS use (fastify, axios, sharp)',
      version: '0.2.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info'
    },
    host: `localhost:${process.env.PORT || server.httpPort}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
