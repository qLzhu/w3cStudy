
Git命令清单
=========

基础知识
---
###### Git添加代码的流程
工作区(working directory) => 暂存区(staging area) => 历史记录(history repository)

- `git add [File name]`：把工作区的文件添加到暂存区
- `git commit -m "Comments"`：把暂存区的文件添加到历史记录里面

###### 恢复代码的流程
历史记录(history repository) => 工作区(working directory)

- `git reset --hard [HEAD]`：回退到某个版本，如果回退到某个版本后悔了，再想返回去，使用`git reflog`来查看你以前执行过的命令，找到要回退到那个版本的哈希值(Hash)

###### Git相关的配置文件
Git的配置信息分别储存在三个不同的地方，让你可以根据个人需求来修改配置文件，分别是：

- 系统级--system
    + 在该文件配置的所有信息，会对计算机上所有的用户生效，同时该目录也是Git的默认安装目录，可以使用`git config --system user.name username`和`git config --system user.email useremail`
    + 储存位置`etc/gitconfig`
- 用户级--global
    + 在该文件配置的所有信息，只会对当前登陆的用户生效，可以使用`git config --global user.name username`和`git config --global user.email useremail`
    + 储存位置`User/用户名/.gitconfig`或`Users/用户名/.config/git/config`
- 目录级--local
    + 在该文件配置的所有信息，只会对当前的目录生效，可以使用`git config --local user.name username`和`git config --local user.email useremail`
    + 储存位置`.git/config`

如果想修改这三个级别的文件，可以使用如下命令：

```
git config -e [--global]
```


目录
---

- [配置相关操作](#配置相关操作) 
    + [help帮助命令](#help帮助命令)
    + [配置基本信息](#配置基本信息)
- [基础操作](#基础操作)
    + [初始化仓库](#初始化仓库)


配置相关操作
---
###### help帮助命令

基本帮助命令
```
git 或 git help
```

显示Git全部命令
```
git help -a
```

显示具体的命令帮助信息，进入显示界面后按·F·显示下一页，按·B·显示上一页，按·Q·退出
```
git help <command>
```

##### 配置基本信息

Git安装好之后，我们首先要做的就是在当前的系统用户目录下配置用户名和邮箱，这样你后你在提交代码的时候，就不用每次配置了，配置用户名和邮箱的目的是为了你在开源的时候别人好联系你。

显示当前 Git 的所有配置信息
```
git config --list
```

列出用户级设置的用户名和邮箱
```
git config --list --global
```

获取当前所用的用户名或邮箱
```
git config user.name
git config --get user.name
//
git config user.email
git config --get user.email
```

设置用户级别的用户名或邮箱
```
git config --global user.name [Name]
git config --global user.email [Email Address]
```

更改当前的用户名(默认修改的是目录级的配置信息)
```
git config user.name [Name]
```

删除某个用户名
```
git config --global --unset user.name [Name]
```


基础操作
---
##### 初始化仓库

本地新建仓库操作流程
```
mkdir [directory] & cd [directory]
git init
```

克隆远程仓库到本地
```
git clone [Remote SSH/HTTPS url]
```

克隆远程仓库到本地并重新命名

```
git clone [Remote SSH/HTTPS url] [newname]
```

##### 添加删除文件



