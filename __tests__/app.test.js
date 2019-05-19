const fastify = require('../app')

describe('server test', () => {
  afterAll(() => {
    fastify.close()
  })

  test('responds with success on request /', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    })

    expect(response.statusCode).toBe(200)
    expect(response.payload).toBe('{"server":"ok"}')
    done()
  })
})
