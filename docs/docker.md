# Docker tips

## Create docker image

```bash
$ docker build -t node-imgoptimize .
$ docker run -it --rm -p 3000:3000 node-imgoptimize
```

use docker-compose, simple commands

```bash
$ docker-compose build
$ docker-compose up
```

## FAQ

### How can I delete Docker's images?

delete all images

```bash
$ docker rmi $(docker images -q)
```

delete all containers

```bash
$ docker rm $(docker ps -a -q)
```
