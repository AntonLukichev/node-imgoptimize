# imgresizer
[![Build Status](https://img.shields.io/travis/AntonLukichev/imgresizer/master.svg?style=flat-square)](https://travis-ci.org/AntonLukichev/imgresizer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
![](https://img.shields.io/node/v/fastify/latest.svg?style=flat-square)
![License](https://img.shields.io/npm/l/fastify.svg?style=flat-square)

[![codecov](https://codecov.io/gh/AntonLukichev/imgresizer/branch/master/graph/badge.svg)](https://codecov.io/gh/AntonLukichev/imgresizer)
![](https://img.shields.io/github/release/AntonLukichev/imgresizer.svg?style=flat-square)
![](https://img.shields.io/github/downloads/AntonLukichev/imgresizer/total.svg?style=flat-square)
[![Known Vulnerabilities](https://snyk.io/test/github/AntonLukichev/imgresizer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AntonLukichev/imgresizer?targetFile=package.json) [![Greenkeeper badge](https://badges.greenkeeper.io/AntonLukichev/imgresizer.svg)](https://greenkeeper.io/)

Proxy server for image resizing on Node.JS use (fastify, axios, sharp)
Automatic recognition of browser support formats WebP

## Install
```js
npm install
```
Requires node >= 10.12, but I recommended use 10.x LTS

## Example Usage

```
{url}?w=500&q=80
```
support parameters (after "?"):

**w**/**width** - image width;<br>
**h**/**height** - image height;<br>
**q**/**qualty** - image quality, 80 recommended for JPEG and WebP;<br>
**f**/**format** - image format, list in config.js and default webp/jpeg;<br>

## Example config
Edit defaults config for you need  
```
./config/config.js

./config/server.js

```

## ToDo
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

## FAQ

## Inspiration

## Contributing
[See the CONTRIBUTING file here](CONTRIBUTING.md)

## License
[MIT](LICENSE) 

Copyright (c) [Anton Lukichev](https://github.com/AntonLukichev)
