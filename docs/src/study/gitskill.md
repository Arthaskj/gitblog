### Git操作

```shell
git status 
git checkout -- */filename
git branch
git branch -a
git checkout -b localname onlinename

//git本地创建分支
git checkout -b dbg_lichen_star  //本地创建新分支
git push origin dbg_lichen_star:dbg_lichen_star  //推送到远程分支 
git push origin :dbg_lichen_star   //删除远程分支

//git创建tag
git tag
git tag -a tagname -m 'tagDec'
git push origin --tags    ||   git push origin tagname
```





### 带历史记录的迁移git仓库

**1. git push --mirror**

--mirror模式会把本地的分支都克隆

```
// 先用--bare克隆裸仓库
git clone git@gitee.com:zhangamie/testApp.git --bare
// 进入testApp.git，这样就可以把所有分支都克隆到新仓库了
git push --mirror git@gitee.com:zhangamie/testApp2.git
```

 或

```
// 普通模式克隆仓库
git clone git@gitee.com:zhangamie/testApp.git
// push所有本地已存在的分支（不管是否有对应的远程分支）
git push --mirror git@gitee.com:zhangamie/testApp2.git
```

 

**2. 加远程源**

```
git remote add origin2 git@gitee.com:zhangamie/testApp2.git
git push origin2
git checkout dev
git push origin2

git remote set-url --add origin <远程仓库地扯>
...
```

这种方式的缺点是只能一次push一个分支，如果要克隆所有分支，需要checkout到各个分支然后push

 

**3. git subtree**

推荐阅读：[git subtree操作](https://segmentfault.com/a/1190000012002151)

上面2种都是整个仓库的迁移，而git subtree可以把某个子目录拆出去

例如想把仓库的目录src/apps/testApp拆出去一个仓库，并且带上这个目录的所有提交历史记录

首先我们得创建一个空的仓库（记得别带任何初始化文件，例如README.md）

例如：git@github.com:xxxx/testApp.git master

然后到主仓库执行这段git命令，就可以到testApp看到代码啦

```
git subtree push --prefix=src/apps/testApp git@github.com:xxxx/testApp.git master
```



# Git tag相关命令

常见命令如下：

```
// 查看标签,可加上参数-l(列表形式列出） -n(附加说明)
git tag [-l -n]
// 查看符合检索条件的标签 
git tag -l 1.*.* 
// 查看对应标签状态 
git checkout 1.0.0 
// 创建标签(本地)
git tag 1.0.0-light 
// 创建带备注标签(推荐) 
git tag -a 1.0.0 -m "这是备注信息" 
// 针对特定commit版本SHA创建标签 
git tag -a 1.0.0 0c3b62d -m "这是备注信息" 
// 删除标签(本地) 
git tag -d 1.0.0 
// 将本地所有标签发布到远程仓库
git push origin --tags 
// 指定版本发送 
git push origin 1.0.0 
// 删除远程仓库对应标签（Git版本 > V1.7.0）
git push origin --delete 1.0.0 
// 旧版本Git 
git push origin :refs/tags/1.0.0
// 获取远程标签
git fetch origin tag "标签名称"
```