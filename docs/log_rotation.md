## Show logs

```text
$ pm2 logs
```

Logs file

```text
$ ls -l ~/.pm2/logs
```

## Install module

```text
$ pm2 install pm2-logrotate
```

## Settings

https://github.com/keymetrics/pm2-logrotate#configure

```text
$ pm2 set pm2-logrotate:compress true
$ pm2 set pm2-logrotate:retain 7
$ pm2 set pm2-logrotate:max_size 5M
```
