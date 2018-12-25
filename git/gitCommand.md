
Git命令清单
=========

git的命令有很多堪称多如牛毛，这么多命令不可能每条都会记住，所以建立了此库方便以后自己查询学习，目前现在只是列出了一些比较常用的命令而已，后期会不定期更新


目录
---

- [基础知识](#基础知识)
    + [配置文件](#配置文件)
    + [Git文件流转流程](#Git文件流转流程)
    + [恢复代码的流程](#恢复代码的流程)
- [配置相关操作](#配置相关操作) 
    + [help帮助命令](#help帮助命令)
    + [配置基本信息](#配置基本信息)
- [基础操作](#基础操作)
    + [初始化仓库](#初始化仓库)
    + [添加删除重命名文件](#添加删除重命名文件)
    + [暂存区提交到历史记录](#暂存区提交到历史记录)


基础知识
---

##### 配置文件

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

##### Git文件流转流程

在 Git 内的文件只有三个状态：已提交（committed）、已修改（modified）和已暂存（staged），已提交表示该文件已经被安全地保存在本地数据库中了；已修改表示修改了某个文件，但还没有提交保存；已暂存表示把已修改的文件放在下次提交时要保存的清单中

Git 管理项目时，文件流转的三个工作区域：工作区也称之为本地仓库（working directory）、暂存区(staging area)和历史记录即Git目录(history repository)，使用`git add`命令把已修改的货新创建的文件添加到暂存区，然后再使用`git commit`命令把暂存区的数据保存到历史记录里（即`.git`目录里）

基本的 Git 工作流程如下：

- 在工作目录中修改某些文件
- 对修改后的文件进行快照，然后保存到暂存区域
- 提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中

##### 恢复代码的流程

历史记录(history repository) => 工作区(working directory)

- `git reset --hard [HEAD]`：回退到某个版本，如果回退到某个版本后悔了，再想返回去，使用`git reflog`来查看你以前执行过的命令，找到要回退到那个版本的哈希值(Hash)


配置相关操作
---

##### help帮助命令

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
git config --global user.name [name]
git config --global user.email [Email Address]
```

更改当前的用户名(默认修改的是目录级的配置信息)
```
git config user.name [name]
```

删除某个用户名
```
git config --global --unset user.name [name]
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
git clone [Remote SSH/HTTPS url] [new_name]
```

##### 添加删除重命名文件

添加本地所有文件到暂存区
```
git add .
```

添加 empty 文件到暂存区
```
git add empty
```

添加 directory 目录里所有的文件到暂存区
```
git add directory
```

删除 empty 文件
```
git rm empty
```

删除 directory 目录里所有的文件
```
git rm -rf directory
```

停止追踪 empty 文件但不会删除本地的文件
```
git rm --cached empty
```

重命名文件
```
git mv ["file_name"] ["new_file_name"]
```

##### 暂存区提交到历史记录

暂存区内容提交到历史记录，回车后会弹出 shell 环境变量 $EDITOR 所指定的软件，一般都是 vim 或 emacs，编辑完成后保存退出即可（也可以使用`git config --global core.editor ["IDE"]`命令设定你喜欢的编辑软件）
```
git commit
```

在一行命令中提交更新
```
git commit -m ["message"]
```

提交暂存区指定的文件到历史记录区
```
git commit ["file_name"] ["file_name"]
```

直接提交已追踪且修改的文件
```
git commit -a
```

直接提交已追踪且修改的文件，并在在一行命令中提交更新
```
git commit -am ["message"]
```

修改上一次的提交
把本次的提交替换掉上次的提交的提交信息
```
git commit --amend -m ["message"]
```

修改上一次的提交
已修改的文件添加到暂存区，并把暂存区内指定文件的此次变化，也跟本次提交一块提交
```
git commit --amend ["file_name..."] -m ["message"]
```

查看误删的文件（前提是已经提交了commit）
```
git log --diff-filter=D --summary
# 恢复
git checkout ["hash"]~1 ["file_name"]
```








