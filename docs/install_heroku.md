# Install and deploy on Heroku

## Prepare install
Of course you should already have GIT, Node.js and NPM installed... but if not :smiley:
[Install GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
[Install Node.js](https://github.com/nodesource/distributions/blob/master/README.md)
```text
$ node --version
$ npm --version
$ git --version
```

## Install Heroku CLI
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

## Login
```text
$ heroku login
```

## Deploying to Heroku

```
$ heroku create node-imgoptimize
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
