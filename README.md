## github
git 提交代码之前执行 git config --global --unset http.proxy (由于本地访问github有代理，故提交的时候需要忽略代理提交)

## 技术栈

**前端技术栈：** vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui

**服务端技术栈：** koa 2.0  (github: https://github.com/llz1990/llz-koa-server)

## 前序准备

**运行前准备：**

   由于此项目是基于nodejs的前后端结合项目，你需要进行nodejs的相关准备工作。项目运行之前，请确保系统已经安装以下应用：
   
   (1)、node (6.0 及以上版本)。使用细节，请参考：[node的下载及安装。](https://nodejs.org/en/download/)
        

## 开发：
1. git clone https://github.com/llz1990/llz-vue-frontend.git
 
2. npm install

**本地运行：**

**npm run serve** 运行之后，会默认打开本地访问路径：http://localhost:3000

**发布：**

**npm run bulid** (生成打包之后的项目文件,此文件主要用于项目部署)。

## 演示
测试账号:

1. username: jack / password: 123456  (admin)
2. username: kobe / password: 123456  (editor)

注意：
admin：拥有最高权限，可以查看所有的页面和按钮；
editor：只有被赋予权限的页面和按钮才可以看到；

