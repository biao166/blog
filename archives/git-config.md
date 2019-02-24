# git 环境设置

## 账户

``` bash
git config --global user.name <your name>
git config --global user.email <your_email@example.com>
```

## 缩写

``` bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last "log -1 HEAD"
git config --global alias.co checkout
```

## 自动使用 rebase

``` bash
git config --global pull.rebase true
git config --global branch.autoSetupRebase always
```

## 中文路径正常显示

``` bash
git config --global core.quotepath false
```

## 文件名大小写敏感

``` bash
git config --global core.ignorecase false
```

## 换行符 (提交时转换为LF，检出时不转换)

``` bash
git config --global core.autocrlf input
```

## 保存用户名和密码

``` bash
git config --global credential.helper store
git config --global credential.helper wincred
```


## 仅推送当前分支

``` bash
git config --global push.default simple
```

## 颜色显示

``` bash
git config --global color.ui true
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
```

