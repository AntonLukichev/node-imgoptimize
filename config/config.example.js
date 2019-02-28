module.exports = {
  baseURL: 'https://images.unsplash.com',
  pathURI: '/photo',
  width: null,
  height: null,
  quality: 80,
  format: 'jpeg',
  fit: 'cover',
  sourceFolder: 'source_img',
  destinationFolder: 'small_img',
  allowFormat: [
    'jpeg',
    'webp'
  ],
  jpegOptions: {
    progressive: true,
    optimiseScans: true
  },
  webpOptions: {
    //  quality: 80,
    //  alphaQuality: 100,
    //  lossless: true
    //  nearLossless: true,
  }
}
