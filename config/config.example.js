module.exports = {
  sourceFolder: 'source_img',
  destinationFolder: 'small_img',
  baseURL: 'https://images.unsplash.com',
  pathURI: [
    '/photo'
  ],
  width: null,
  height: null,
  quality: 80,
  format: 'jpeg',
  fit: 'cover',
  allowFormat: [
    'jpeg',
    'webp'
  ],
  jpegOptions: {
    progressive: true, // use progressive (interlace) scan
    chromaSubsampling: '4:2:0', // set to '4:4:4' to prevent chroma subsampling when quality <= 90 (optional, default '4:2:0')
    trellisQuantisation: false, // apply trellis quantisation
    overshootDeringing: false, // apply overshoot deringing
    optimiseScans: true, // optimise progressive scans, forces progressive, requires mozjpeg
    optimiseCoding: true, // optimise Huffman coding tables
    quantisationTable: 0 // quantization table to use, integer 0-8
  },
  webpOptions: {
    alphaQuality: 100, // quality of alpha layer, integer 0-100
    lossless: false, // use lossless compression mode
    nearLossless: false //  use near_lossless compression mode
  }
}
