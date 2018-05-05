# npm 安装 sqlite3 卡住原因及解决办法

npm 安装 sqlite3 的时候，经常会卡在 node-pre-gyp（node-pre-gyp 是一个分发nodejs二进制程序包的工具） 阶段，究其原因是 Amazon s3 被墙了。

官方提供的解决方案是

    Using the npm config argument: --{module_name}_binary_host_mirror can download binary files through a mirror.

    e.g.: Install v8-profiler from npm.

    $ npm install v8-profiler --profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/


也许你认为 sqlite3 会是

```
npm install sqlite3 --sqlite3_binary_host_mirror= https://npm.taobao.org/mirrors/sqlite3
```

结果却是

```
cnpm install sqlite3 --node-sqlite3_binary_host_mirror=https://npm.taobao.org/mirrors/ --log-level info
```

具体原因看参考5


## 小技巧

npm install package 出现卡住或者其他突发状况时，可以将具体过程打印出来: <code>npm install koa --log-level info</code>

## 参考

1. [Node.js version,NODE_MODULE_VERSION 对应表](https://nodejs.org/zh-cn/download/releases/)

2. [mirrors/sqlite3](https://npm.taobao.org/mirrors/sqlite3)

3. [npm config](https://docs.npmjs.com/misc/config)

4. [node-pre-gyp](https://github.com/mapbox/node-pre-gyp)

5. [Is mirroring broken? #250](https://github.com/mapbox/node-pre-gyp/issues/250)