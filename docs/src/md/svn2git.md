
# SVN仓库无损迁移到GIT仓库
`git svn`



## 拉取svn代码

```shell
git svn clone -r svn地址 --no-metadata

# 如果仓库历史很长，全部迁移会耗费很长时间，可以使用 版本号:HEAD 参数只拉取版本号之后的提交历史
git svn clone -r 35125:HEAD svn地址 --no-metadata

```



## 设置git remote

在拉取后的svn文件夹中添加remote

```shell
git remote add git仓库地址

git push 
```

