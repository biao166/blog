# git + ssh-add 多账号配置

## 1. 生成key

终端下 cd 到 ~/.ssh/ 目录下，执行

```
ssh-keygen -t rsa -C 'biao166@github.com' -f id_rsa_github
```
其中 biao166@github.com 替换为你的邮箱， id_rsa_github 为生成文件文件名，执行后会问你是否需要 enter a passphrase， 默认一路确认就行。

## 2. 添加到 ssh-agent

将新生成的key 添加到 ssh-agent

```
ssh-agent -s
ssh-add ~/.ssh/id_rsa_github
```

同时也可以通过命令 <code>ssh-add -l</code> 查看之前已添加的key。

## 3. 添加公匙到账户

```
clip < ~/.ssh/id_rsa_github.pub
```

重复执行以上步骤
```
ssh-keygen -t rsa -C 'biao166@qq.com' -f id_rsa_oschina
```

## 4. 配置
```
cd ~/.ssh/
touch config
vim config
```
配置如下

```
Host *.github.com
	HostName github.com
	IdentityFile ~/.ssh/id_rsa_github
	User biao166
Host *.git.oschina.net
	HostName git.oschina.net
	IdentityFile ~/.ssh/id_rsa_oschina
	User biao166
```

## 5. 测试

```
ssh -vT git@github.com
ssh -vT git@git.oschina.com
```

## 有可能碰到的问题

> Could not open a connection to your authentication agent？

应该是 ssh-agent 没有启动，执行以下命令启动

```
eval `ssh-agent -s`
ssh-add
```

## 参考

1. [generating-ssh-keys](https://help.github.com/articles/generating-ssh-keys/)
2. [could-not-open-a-connection-to-your-authentication-agent](http://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent)
3. [multiple-github-accounts-ssh-config](http://stackoverflow.com/questions/3225862/multiple-github-accounts-ssh-config)
