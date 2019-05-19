const fastify = require('../app')

describe('Server tests', () => {
  afterAll(() => {
    fastify.close()
  })

  test('OK /', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    })

    expect(response.statusCode).toBe(200)
    expect(response.payload).toBe('{"server":"ok"}')
    done()
  })
  test('OK /favicon.ico', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/favicon.ico'
    })
    expect(response.statusCode).toBe(200)
    done()
  })
  test('OK /api/headers/', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/api/headers/'
    })
    expect(response.statusCode).toBe(200)
    done()
  })
})
