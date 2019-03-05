exports.getFile = {
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
      url: { type: 'string' },
      filename: { type: 'string' }
    }
  }
}
