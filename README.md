```shell

rm -rf node_modules //删除指定目录
rm package-lock.json
npm cache clear --force //清除缓存
npm install


```

> 因为sass-loader依赖于node-sass，所以还要安装node-sass，但是建设使用cnpm安装，避免安装不成功出现各种问题

> 开发下这些文件是保存到内存中的，但是你最后打包生成的是需要直接生成到目标文件夹中的