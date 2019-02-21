module.exports = {
  baseURL: 'https://www.tui.ru',
  pathURI: '/getmedia/',
  //  baseURL: 'https://images.unsplash.com',
  //  pathURI: '/photo',
  width: null,
  height: null,
  quality: 80,
  format: 'jpeg',
  fit: 'cover',
  originalFolder: '/src_img',
  destinationFolder: '/small_img',
  allowFormat: [
    'jpeg',
    'webp',
    'png'
  ],
  jpegOptions: {
    progressive: true,
    optimiseScans: true
  },
  webpOptions: {
    //  alphaQuality: 100,
    //  lossless: true
  }
}
