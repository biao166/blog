# 升级 node 及 npm

下载 node

``` bash
wget https://npm.taobao.org/mirrors/node/latest-v6.x/node-v6.9.1-linux-x64.tar.xz
tar -xf ./node-v6.9.1-linux-x64.tar.xz -C /usr/local
```

升级

``` bash
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/node `which node`
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/npm `which npm`
```

新装

``` bash
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/node /usr/bin/node
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/npm /usr/bin/npm
```

设置 cnpm

``` bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
```

安装常用库

``` bash
cnpm install npm@4 -g
cnpm install node-pre-gyp -g
cnpm install node-gyp -g
cnpm install pm2 -g
```

软链 pm2

``` bash
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/pm2 `which pm2`
# 或者
ln -sf /usr/local/node-v6.9.1-linux-x64/bin/pm2 /usr/bin/pm2
```
