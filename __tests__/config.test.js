const mainController = require('../controllers/mainController')
const CONFIG = require('../config')

describe('MainController tests', () => {
  test('Accept WEBP', async (done) => {
    const acceptString = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    expect(mainController.isAcceptWebp(acceptString)).toBe(true)
    done()
  })
  test('getFormat WEBP', async (done) => {
    expect(mainController.getFormat('webp')).toBe('webp')
    done()
  })
  test('getFormat JPEG', async (done) => {
    expect(mainController.getFormat('jpeg')).toBe('jpeg')
    done()
  })
  test('getFormat default', async (done) => {
    expect(mainController.getFormat('raw')).toBe(CONFIG.defaultFormat)
    done()
  })
  test('isAllowFileType true', async (done) => {
    expect(mainController.isAllowFileType('image/jpeg')).toBe(true)
    done()
  })
  test('isAllowFileType false', async (done) => {
    expect(mainController.isAllowFileType('image/raw')).toBe(false)
    done()
  })
})
