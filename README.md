请安装文档配置 github packages 的 access_token orz

https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages

简略步骤
右上角头像 -> Settings -> Developer settings -> Personal access tokens -> Generate new token

```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN // 就是刚刚 Generate new token 的结果
> Email: PUBLIC-EMAIL-ADDRESS
```

然后 npm run init 搞定～