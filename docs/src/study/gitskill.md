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

