module.exports = {
  baseURL: 'https://www.tui.ru',
  pathURI: '/getmedia/',
  //  baseURL: 'https://images.unsplash.com',
  //  pathURI: '/photo',
  width: null,
  height: null,
  quality: 80,
  fit: 'cover',
  originalFolder: '/src_img',
  destinationFolder: '/small_img',
  allowTypes: [
    'image/jpeg',
    'image/webp'
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
