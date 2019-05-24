# Install on Ubuntu 16.04

## Install

### Install Node.js v10.x

[Installing Node.js](https://github.com/nodesource/distributions/blob/master/README.md)

```text
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs build-essential
$ npm install -g yarn
```

### Clone project

```text
$ git clone https://github.com/AntonLukichev/node-imgoptimize.git
$ yarn install

$ cd ..
$ chmod +x ./app.js
```

### Install PM2

```text
$ yarn i -g pm2
$ pm2 start app.js
$ pm2 startup
```

## Log rotation

[Log rotation setup](log_rotation.md)
