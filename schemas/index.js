exports.getFile = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'file id'
        }
      }
    },
    body: {
      type: 'object',
      properties: {
        hello: { type: 'string' }
        /* obj: {
          type: 'object',
          properties: {
            some: { type: 'string' }
          }
        } */
      }
    }
  }
}
