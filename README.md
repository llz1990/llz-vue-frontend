## github
git 提交代码之前执行 git config --global --unset http.proxy (由于本地访问github有代理，故提交的时候需要忽略代理提交)

## 技术栈

**前端技术栈：** vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui

**服务端技术栈：** mockjs

## 参考文档

- [vue](https://vuejs.bootcss.com/v2/guide/)：Vue是一套用于构建用户界面的渐进式框架。

- [vuex](https://vuex.vuejs.org/zh/)：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
 
- [vue-router](https://router.vuejs.org/zh/)：Vue Router 是 Vue.js 官方的路由管理器。
 
- [webpack](https://webpack.js.org/concepts/)：前端模块打包器。
 
- [less](http://lesscss.cn/)：Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
 
- [element-ui](https://element.eleme.io/)：Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。
 
- [mockjs](https://github.com/nuysoft/Mock/wiki/Getting-Started)：生成随机数据，拦截 Ajax 请求。


## 前序准备

**运行前准备：**

   由于此项目是基于nodejs的前后端结合项目，你需要进行nodejs的相关准备工作。项目运行之前，请确保系统已经安装以下应用：
   
   (1)、node (6.0 及以上版本)。使用细节，请参考：[node的下载及安装。](https://nodejs.org/en/download/)
        

## 开发：
1. git clone -b dev-permission https://github.com/wdlhao/vue2-element-touzi-admin  (注意：要从dev-permission分支拉取代码)

1. cd vue2-element-touzi-admin
 
1. npm install

**本地运行：**

**npm run serve** 运行之后，会默认打开本地访问路径：http://localhost:8012

**发布：**

**npm run bulid** (生成打包之后的项目文件,此文件主要用于项目部署)。

## 演示
测试账号:

1. username: admin / password: 123456
2. username: editor / password: 123456

注意：

admin：拥有最高权限，可以查看所有的页面和按钮；

editor：只有被赋予权限的页面和按钮才可以看到；

