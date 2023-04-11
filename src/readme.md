# note
上述所有内容最出色的方面在于，以这种方式加载资源，不需要把所有的资源都放置在/assets目录，可以把资源放在组件里面。如果一个组件想要被移到另外一个项目，只需要把整个组件文件夹复制过去，npm安装相同的依赖，然后在webpack.config.js配好相同的loader就好。

```
 |- /assets
 |– /components
 |  |– /my-component
 |  |  |– index.jsx
 |  |  |– index.css
 |  |  |– icon.svg
 |  |  |– img.png
```
