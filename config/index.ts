// const utils = require('../utils')
/* import cpSync from '../utils';

cpSync('./config/config.example.js', './config/config.js');
cpSync('./config/server.example.json', './config/server.json');

const server = require('./server')
const config = require('./config')
const axios = require('./axios') */

import server from './server.json';
// import config from './config';
// import axiosConfig from './axios';

export default {
  httpHost: server.httpHost,
  httpPort: server.httpPort,
  /* logLevel: server.logLevel,
  baseURL: config.baseURL,
  pathURI: config.pathURI,
  defaultWidth: config.width,
  defaultHeight: config.height,
  defaultQuality: config.quality,
  defaultFormat: config.format,
  defaultFit: config.fit,
  sourceFolder: config.sourceFolder,
  destinationFolder: config.destinationFolder,
  allowFormat: config.allowFormat,
  jpegOptions: config.jpegOptions,
  webpOptions: config.webpOptions,
  axiosConfig: axiosConfig,
  sentryDsn: server.sentriDsn */
};
