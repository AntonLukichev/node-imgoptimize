const utils = require('../utils')
const fs = require('fs')
const path = require('path')

describe('Utils tests', () => {
  test('cpSync file exists', async (done) => {
    const src = path.join(__dirname, '../config/config.example.js')
    const dest = path.join(__dirname, '../config/config.js')
    expect(utils.cpSync(src, dest)).toBe(false)
    done()
  })
  test('cpSync file copy', async (done) => {
    const src = path.join(__dirname, '../config/config.example.js')
    const dest = path.join(__dirname, '../config/config.temp.js')
    expect(utils.cpSync(src, dest)).toBe(true)
    fs.unlinkSync(dest)
    done()
  })
})
