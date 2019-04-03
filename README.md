# node-imgoptimize
[![Build Status](https://img.shields.io/travis/AntonLukichev/node-imgoptimize/master.svg?style=flat-square)](https://travis-ci.org/AntonLukichev/node-imgoptimize)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
![](https://img.shields.io/node/v/fastify/latest.svg?style=flat-square)
[![License](https://img.shields.io/npm/l/fastify.svg?style=flat-square)](LICENSE)

[![codecov](https://codecov.io/gh/AntonLukichev/node-imgoptimize/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/AntonLukichev/node-imgoptimize)
[![release](https://img.shields.io/github/release/AntonLukichev/node-imgoptimize.svg?style=flat-square)](https://github.com/AntonLukichev/node-imgoptimize/releases)
![downloads](https://img.shields.io/github/downloads/AntonLukichev/node-imgoptimize/total.svg?style=flat-square)
[![Known Vulnerabilities](https://snyk.io/test/github/AntonLukichev/node-imgoptimize/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/AntonLukichev/node-imgoptimize?targetFile=package.json)
[![Greenkeeper badge](https://badges.greenkeeper.io/AntonLukichev/node-imgoptimize.svg?style=flat-square)](https://greenkeeper.io/)

Proxy server for image optimization on Node.JS use (fastify, axios, sharp)
Automatic recognition of browser support formats WebP

## Install
```bash
$ npm install node-imgoptimize --save

$ cd ./config/
$ cp ./config.example.js ./config.js
$ cp ./server.example.js ./server.js
```
```bash
$ git clone https://github.com/AntonLukichev/node-imgoptimize.git
$ npm install
$ cd ./node-imgoptimize/config/
$ cp ./config.example.js ./config.js
$ cp ./server.example.js ./server.js
```
Requires node >= 6.0, but I recommended use 10.x LTS

[Install as service on Ubuntu](docs/install_ubuntu.md)<br>
[Install on Heroku](docs/install_heroku.md)<br>
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/AntonLukichev/node-imgoptimize)

## Example Usage

```
{url}?w=500&q=80
```
support parameters (after "?"):

**w** - image width;<br>
**h** - image height;<br>
**q** - image quality, 80 recommended for JPEG and WebP;<br>
**fm** - image format, list in config.js and default jpeg or webp (if browser supports it);<br>

## Example config
Edit defaults config for you need  
```
./config/config.js

./config/server.js

```

## ToDo

v0.2.0:

- [x] generate source url with original request parameters
- [x] caching original file
- [x] support a large number of files

v0.3.0:
- [x] add multiple path URI
- [x] add JPEG and WebP options

v0.4.0:
- [x] custom log level
- [x] documentation API in Swagger
- [ ] expand API

I plan to implement in the future:
* add log rotation
* add options Low Quality Image Placeholders (LQIP)
* add Client Hints (headers DPR, Viewport-Width, Width) for support Chrome, Opera, Android Chrome
* add support another formats (GIF, PNG, SVG...)
* divide the functionality into modules up to version 1.0.0
* add test (Jest, Mocha)
* add docker
* support PAAS (Herocu, Zeit, Nanobox...)
* add support HTTP2
* add security protection
* add support redis/mongo for cache info
* add image operations (rotate, blur, normalise...)

## Lazy loading
If you'd like to lazy load images, I recommend using [lazysizes](https://github.com/aFarkas/lazysizes).

## FAQ

## Security
[Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

[Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)

## Contributing
[See the CONTRIBUTING file here](CONTRIBUTING.md)

## License
[MIT](LICENSE) 

Copyright (c) [Anton Lukichev](https://github.com/AntonLukichev)
