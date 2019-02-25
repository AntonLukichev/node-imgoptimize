# imgresizer
[![Build Status](https://img.shields.io/travis/AntonLukichev/imgresizer/master.svg?style=flat-square)](https://travis-ci.org/AntonLukichev/imgresizer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
![](https://img.shields.io/node/v/fastify/latest.svg?style=flat-square)
![License](https://img.shields.io/npm/l/fastify.svg?style=flat-square)

[![codecov](https://codecov.io/gh/AntonLukichev/imgresizer/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/AntonLukichev/imgresizer)
![](https://img.shields.io/github/release/AntonLukichev/imgresizer.svg?style=flat-square)
![](https://img.shields.io/github/downloads/AntonLukichev/imgresizer/total.svg?style=flat-square)
[![Known Vulnerabilities](https://snyk.io/test/github/AntonLukichev/imgresizer/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/AntonLukichev/imgresizer?targetFile=package.json)
[![Greenkeeper badge](https://badges.greenkeeper.io/AntonLukichev/imgresizer.svg?style=flat-square)](https://greenkeeper.io/)

Proxy server for image resizing on Node.JS use (fastify, axios, sharp)
Automatic recognition of browser support formats WebP

## Install
```bash
npm install
mkdir src_img
mkdir small_img
```
Requires node >= 8.0, but I recommended use 10.x LTS

## Example Usage

```
{url}?w=500&q=80
```
support parameters (after "?"):

**w** - image width;<br>
**h** - image height;<br>
**q** - image quality, 80 recommended for JPEG and WebP;<br>
**f** - image format, list in config.js and default webp/jpeg;<br>

## Example config
Edit defaults config for you need  
```
./config/config.js

./config/server.js

```

## ToDo

v0.2.0:

* generate source url with original request parameters
* caching original file
* custom log level

v0.3.0:
* expand API

I plan to implement in the future:
* add multiple pathURI
* add support another formats (GIF, PNG, SVG...)
* divide the functionality into modules up to version 1.0.0
* documentation API in Swagger
* add test (Jest, Mocha)
* add docker
* add support HTTP2
* add DDoS protection
* add support redis/mongo for cache info
* add image operations (rotate, blur, normalise...)

## Lazy loading
If you'd like to lazy load images, I recommend using [lazysizes](https://github.com/aFarkas/lazysizes).

## FAQ

## Contributing
[See the CONTRIBUTING file here](CONTRIBUTING.md)

## License
[MIT](LICENSE) 

Copyright (c) [Anton Lukichev](https://github.com/AntonLukichev)
