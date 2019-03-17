# Install on Ubuntu 16.04

### Install Node.js v10.x
[Installing Node.js](https://github.com/nodesource/distributions/blob/master/README.md)
```bash
# Using Ubuntu
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs build-essential
```

### Clone project
```bash
$ git clone https://github.com/AntonLukichev/node-imgoptimize.git
$ npm install
$ cd ./node-imgoptimize/config/
$ cp ./config.example.js ./config.js
$ cp ./server.example.js ./server.js

$ cd ..
$ chmod +x ./app.js
```

### Install PM2
```bash
$ npm i -g pm2
$ pm2 start app.js
$ pm2 startup
```
