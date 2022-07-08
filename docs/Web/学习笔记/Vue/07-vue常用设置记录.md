---
id: 常用记录
title: 07 | vue各种小知识记录
---

### 01 | .eslintignore

做代码风格检测的时候忽略某些文件不去检查

```
# 项目根目录
touch .eslintignore

# 添加要被忽略的文件
/src/vender
/dist
```



### 02 | vue3中 vuex、vue-router 实例

**使用根模块 vuex state 数据**

```vue
<template>
  <div>
    <!-- 1. 使用根模块state -->
    <p>{{ $store.state.username }}</p>
  </div>
</template>
```

```vue
<script>
import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
  // 组件名
  name: 'App',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    const store = useStore()
    console.log(store.state.username)
    // 生命周期方法 - DOM渲染前
    onBeforeMount(() => {
    })
    // 生命周期方法 - DOM渲染后
    onMounted(() => {
    })
  }
}
</script>
```

**使用根模块的 vuex getters 数据**

```vue
<template>
  <div>
    <!-- 2. 使用根模块的 getter 的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.getters['newName'] }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  // 组件名
  name: 'App',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    // 使用 vuex 仓库
    const store = useStore()
    // 2. 使用根模块的 getters 数据
    console.log(store.getters.newNmae)
  }
}
</script>

```

### 03 | vue-router

#### 获取当前路由

`router.currentRoute` 相当于 `$route`

但是 `$route.path`  或者 `$route.fullPath` 只能在组件中使用

```
组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
```

js 模块中要使用 `router.currentRoute`

```
// js模块中：router.currentRoute.value.fullPath 就是当前路由地址
```

`router.currentRoute` 是 ref 响应式数据，要拿值的话需要 `.value`

`encodeURIComponent` 转换 uri 编码，防止解析地址出问题 用来解析获得的 fullPath 中的特殊字符

```
const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
```



### 04 |  [] 设置一个动态的 key

设置一个动态的 key, 写 js 表达式, js 表达式的执行结果当做 key

```js
....
// 请求工具函数
const request = (url, method, submitData) => {
  // 负责发请求
  return instance({
    url,
    method,
    // [] 设置一个动态的 key, 写 js 表达式, js 表达式的执行结果当做 key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
```

### 05 | less 混入

```less
.abc {
  width: 100px;
  height: 100px;
}

.box {
  .abc()
}

.abc2() {
  width: 100px;
  height: 100px;
}

.box2 {
  .abc2();
}


.abc3(@width) {
  width: @width;
  height: @width;
}


.box3 {
  .abc3(100px);
}
```

**混入的痛点，每个文件使用都要导入，需要安装插件支持自动配置和导入**

```
vue add style-resources-loader
```

通过这个插件可以自动注入到每个 less 文件或者 vue 组件中 style 标签中

```jsx {1, 3, 15}
$ vue add style-resources-loader                                                                             10014  17:48:07 
 WARN  There are uncommitted changes in the current repository, it's recommended to commit or stash them first.
? Still proceed? Yes

📦  Installing vue-cli-plugin-style-resources-loader...

+ vue-cli-plugin-style-resources-loader@0.1.5
updated 1 package in 4.67s

133 packages are looking for funding
  run `npm fund` for details

✔  Successfully installed plugin: vue-cli-plugin-style-resources-loader

? CSS Pre-processor? Less

🚀  Invoking generator for vue-cli-plugin-style-resources-loader...
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-style-resources-loader
 DONE  style-resources-loader  One more step, add patterns for your resources's files in vue.config.js
```



安装成功后，在 `vue.config.js` 中自动添加配置，如下

```js
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 需要引入哪些文件自动注入,最好使用绝对路径
      // 需要使用 path.json 来拼接完整的路径
      // __dirname 当前目录下
      patterns: [
        path.join(__dirname, './src/assets/styles/mixins.less'),
        path.join(__dirname, './src/assets/styles/variables.less')
      ]
    }
  }
})

```

### 06 | 样式重置包

```
npm install normalize.css
```

安装后，在 main.js 导入 normalize.css 即可

```js
// main.js

import App from './App.vue'

import 'normalize.css'
```

`common.less`

```less
// 重置样式
* {
  box-sizing: border-box;
 }
 
 html {
   height: 100%;
   font-size: 14px;
 }
 body {
   height: 100%;
   color: #333;
   min-width: 1240px;
   font: 1em/1.4 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI', 'Hiragino Sans GB', 'STHeiti', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif
 }
 
 ul,
 h1,
 h3,
 h4,
 p,
 dl,
 dd {
   padding: 0;
   margin: 0;
 }
 
 a {
   text-decoration: none;
   color: #333;
   outline: none;
 }
 
 i {
   font-style: normal;
 }
 
 input[type="text"],
 input[type="search"],
 input[type="password"], 
 input[type="checkbox"]{
   padding: 0;
   outline: none;
   border: none;
   -webkit-appearance: none;
   &::placeholder{
     color: #ccc;
   }
 }
 
 img {
   max-width: 100%;
   max-height: 100%;
   vertical-align: middle;
 }
 
 ul {
   list-style: none;
 }
 
 #app {
   background: #f5f5f5;
   user-select: none;
 }
 
 .container {
   width: 1240px;
   margin: 0 auto;
   position: relative;
 }
 
 .ellipsis {
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
 }
 
 .ellipsis-2 {
   word-break: break-all;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
 }
 
 .fl {
   float: left;
 }
 
 .fr {
   float: right;
 }
 
 .clearfix:after {
   content: ".";
   display: block;
   visibility: hidden;
   height: 0;
   line-height: 0;
   clear: both;
 }
```

