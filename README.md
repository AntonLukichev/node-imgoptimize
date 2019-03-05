# img-resizer
[![Build Status](https://img.shields.io/travis/AntonLukichev/imgresizer/master.svg?style=flat-square)](https://travis-ci.org/AntonLukichev/img-resizer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
![](https://img.shields.io/node/v/fastify/latest.svg?style=flat-square)
[![License](https://img.shields.io/npm/l/fastify.svg?style=flat-square)](LICENSE)

[![codecov](https://codecov.io/gh/AntonLukichev/img-resizer/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/AntonLukichev/img-resizer)
[![release](https://img.shields.io/github/release/AntonLukichev/img-resizer.svg?style=flat-square)](https://github.com/AntonLukichev/img-resizer/releases)
![downloads](https://img.shields.io/github/downloads/AntonLukichev/img-resizer/total.svg?style=flat-square)
[![Known Vulnerabilities](https://snyk.io/test/github/AntonLukichev/img-resizer/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/AntonLukichev/img-resizer?targetFile=package.json)
[![Greenkeeper badge](https://badges.greenkeeper.io/AntonLukichev/imgresizer.svg?style=flat-square)](https://greenkeeper.io/)

Proxy server for image resizing on Node.JS use (fastify, axios, sharp)
Automatic recognition of browser support formats WebP

## Install
```bash
npm install img-resize --save

cd ./config/
cp ./config.example.js ./config.js
cp ./server.example.js ./server.js
```
Requires node >= 6.0, but I recommended use 10.x LTS

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
- [ ] expand API
- [ ] documentation API in Swagger
- [ ] custom log level

I plan to implement in the future:
* add support another formats (GIF, PNG, SVG...)
* divide the functionality into modules up to version 1.0.0
* add test (Jest, Mocha)
* add docker
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
