# Node APP 运维经验

## 指定账户运行node进程

通常通过 su 切换用户来指定特定账号（www）来运行 node 进程，操作麻烦

其实可以通过设置 NODE_USER 指定账户运行

在 bin/www（app.js）加入

```
if (process.env.NODE_USER) {
  console.log("run as " + process.env.NODE_USER)
  process.setuid(process.env.NODE_USER)
}
```

直接运行

```
NODE_USER=www node ./bin/www
```

pm2 运行

```
NODE_USER=www pm2 start pm2.json
```

终极方案

将NODE_USER 加入到 pm2.json 的 env配置中

```
{
  // ...
  "env": {
    "PORT": 9066,
    "NODE_USER": "www"
  }
  // ...
}
```

## pm2 调整

pm2默认运行目录是当前用户的 $HOME/.pm2， 这样每个用户都会是一个新的守护进程，无法互相查看。

比如你在 www 账户启动一个 app，但你在 root 账户下执行 pm2 list 却无法查看到这个 app 的信息。

这个问题可以通过指定环境变量 PM2_HOME 来指定 .pm2 的位置，例如将它指定到 /var/run/pm2 方便所有用户访问即可解决。

编辑文件 /etc/profile ，加入

```
export PM2_HOME="/var/run/pm2"
```

执行

```
pm2 kill
source /etc/profile
chmod -R 777 /var/run/pm2
pm2 start pm2.json
```
