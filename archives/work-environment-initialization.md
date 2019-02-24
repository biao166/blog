# 编程环境初始化

## 安装软件

下载安装包，并安装

| 名称      | 官网                                              |                        坚果云下载                         | 备注                             |
| --------- | :------------------------------------------------ | :-----------------------------------------------------: | :------------------------------- |
| cmder     | [cmder](https://cmder.net/)                       | [下载](https://www.jianguoyun.com/p/DfvxJdgQ8FIYs8ehAQ) | 推荐full版，集成git              |
| nvm       | [nvm](https://github.com/coreybutler/nvm-windows) | [下载](https://www.jianguoyun.com/p/DZxItPwQ8FIYwcehAQ) | windows版本，不直接通过npm来安装 |
| vscode    | [vscode](https://code.visualstudio.com/)          | [下载](https://www.jianguoyun.com/p/DViqpskQ8FIYjcihAQ) | 代码编辑器                       |
| notepad++ | [notepad++](https://notepad-plus-plus.org/)       | [下载](https://www.jianguoyun.com/p/DZxItPwQ8FIYwcehAQ) | 文本编辑器                       |

注意：部分软件是直接解压使用， 部分软件需要手动添加到 PATH

## 环境配置

### 初始化

打开 cmder, 执行

```bash
# 检查 git
git -v

# 检查 nvm, 如提示未安装见下文
nvm -v

# 安装nodejs
nvm install latest

# 检查 node
node -v

# 检查 npm
npm -v

# npm 安装 nrm
npm install nrm -g --registry=https://registry.npm.taobao.org

# 展示可用源
nrm ls

# npm 使用淘宝源
nrm use taobao
```

### git 配置

[# git 环境设置](/archives/git-config.md)


## 可能的问题

* nvm 安装后找不到命令

解决： 以管理员权限重新执行一次 

```
C:\Users\<your name>\AppData\Roaming\nvm\install.cmd
```




