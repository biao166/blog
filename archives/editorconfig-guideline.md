# EditorConfig Guideline

## 作用

**EditorConfig** 用来帮助开发者在不同编辑器和IDEs之间设置和维护始终唯一的代码风格，EditorConfig项目包含一个配置文件用来定义自己项目的代码风格和一些编辑器插件用来帮助编辑器读取配置文件并按照配置文件来格式化代码。EditorConfig 配置文件简单易懂，并且能够很好的和（VCS）version control systems 协同工作。

## 位置

当打开一个文件时，`EditorConfig`插件会在打开文件的目录和其每一级父目录查找`.editorconfig`文件，直到有一个配置文件`root=true`。

`EditorConfig`配置文件从上往下读取，并且路径最近的文件最后被读取。匹配的配置属性按照属性应用在代码上，所以最接近代码文件的属性优先级最高。

**Windows 用户：**在资源管理器创建`.editorconfig`文件，可以先创建`.editorconfig.`文件，系统会自动重名为`.editorconfig`。

## 格式详情

`EditorConfig`文件使用INI格式（*译注：请参考维基百科*），目的是可以与[Python ConfigParser Library](https://docs.python.org/2/library/configparser.html)兼容，但是允许在分段名（译注：原文是section names）中使用“and”。分段名是全局的文件路径，格式类似于[gitignore](http://manpages.ubuntu.com/manpages/intrepid/man5/gitignore.5.html#contenttoc2)。斜杠(`/`)作为路径分隔符，`#`或者`;`作为注释。注释应该单独占一行。`EditorConfig`文件使用`UTF-8`格式、`CRLF`或`LF`作为换行符。

下面将详细解释文件路径匹配模式和EditorConfig 目前支持的配置属性。

### Wildcard Patterns

-  \* **除路径分隔符`\`外匹配所有字符串字符**

- \** **匹配所有字符串字符**

- ? **匹配所有单个字符**

- [name] **匹配name字符**

- [!name] **匹配非name字符**

- {s1, s2, s3} **匹配任意给定的字符串（通过逗号分隔）**

特殊字符需要通过转移符进行转义，使得特殊字符不会被当做通配符解析。

### 支持的配置属性

**注意：并不是所有的编辑器插件都支持以下全部配置属性**

- `indent_style`: set to tab or space to use hard tabs or soft tabs respectively.

缩进样式：可以设置为`tab`和`space`两个值。

- `indent_size`: a whole number defining the number of columns used for each indentation level and the width of soft tabs (when supported). When set to tab, the value of **tab_width** (if specified) will be used.

当缩进样式设置为`space`时，`indent_size`用来设置每次缩进相当于多少列。

- `tab_width`: a whole number defining the number of columns used to represent a tab character. This defaults to the value of **indent_size** and doesn't usually need to be specified.

当缩进设置为`tab`时，`tab_width` 用来设置每次缩进相当于多少列代码。

- `end_of_line`: set to lf, cr, or crlf to control how line breaks are represented.

`end_of_line`用来定义行末采用什么符号来进行换行，可以的选择包括`lf` `cr` 和`crlf`.

- `charset`: set to latin1, utf-8, utf-8-bom, utf-16beor utf-16le to control the character set. Use of utf-8-bom is discouraged.

编码格式，支持`latin1`、`utf-8`、`utf-8-bom`、`utf-16be`和`utf-16le`，不建议使用`uft-8-bom`。

- `trim_trailing_whitespace`: set to true to remove any whitespace characters preceding newline characters and false to ensure it doesn't.

设为`true`表示会除去代码行末的任意空白字符，`false`反之。

- `insert_final_newline`: set to true ensure file ends with a newline when saving and false to ensure it doesn't.

设为`true`表明使文件以一个空白行结尾，`false`反之。

- `root`: special property that should be specified at the top of the file outside of any sections. Set to true to stop `.editorconfig` files search on current file.

表明是最顶层的配置文件，发现设为`true`时，才会停止查找`.editorconfig`文件。


## 编辑器设定

**Sublime Text**

如果要安装Sublime Text插件，直接在Package Control中搜索`EditorConfig`就行。

## 部门默认配置

``` yaml
# http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.hbs]
insert_final_newline = false

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

## 参考
* [官网](http://editorconfig.org/)
* [配置项](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)
* [示例](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig)

