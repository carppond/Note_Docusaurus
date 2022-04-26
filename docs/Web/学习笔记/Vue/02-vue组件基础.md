---
id: vue组件基础+进阶
title: 02 | vue组件基础+进阶
---

## 一、组件基础

### 01 | 组件的概念

- 组件是可复用的 Vue 实例，封装标签，样式和 JS 代码

- 组件化：封装的思想，把页面上 `可重用的部分` 封装为 `组件`，从而方便项目的开发和维护

- 一个页面， 可以拆分成一个个组件，一个组件就是一个整体, 每个组件可以有自己独立的 结构 样式 和 行为(html, css和js)



### 02 | 组件的基本使用

目标：每个组件都是一个独立的个体，代码里体现为一个独立的.vue 文件

1. 创建组件，封装要复用的标签、样式、JS 代码

2. 注册组件

   1. 全局注册 --- main.js 中

      ```jsx
      import 组件对象 from 'vue 文件路径'
      
      Vue.component("组件名", 组件对象)
      ```

   2. 局部注册 --- 某个.vue 文件中

      ```jsx
      <script>
      import 组件对象 from 'vue 文件路径'
      export default {
        	components: {
            	"组件名": 组件对象
          }
      }
      </script>
      ```

3. 使用组件

   ```vue
   <template>
   		<div id="app">
         <h3>案例：折叠面板</h3>
         <组件名></组件名>
         <组件名></组件名>
     </div>
   </template>
   ```



### 03 | 组件 - scoped 的作用

- 准备：当前组件内标签都被添加 `data-v-hash 值` 的属性
- 获取：css 选择器都被添加 `[data-v-hash值]` 的属性选择器

```jsx
<div data-v-0a30544343></div>

div[data-v-0a30544343] {
  	background-color: red
}
```

- vue 组件内样式，只针对当前组件内标签生效的话，给 style 上添加 scoped
- 原理和过程：
  - 会自动给标签添加  `data-v-hash 值`属性，所有选择器都带属性选择



### 04 | 组件通信 - 父传子 - props

**目标：父组件 --> 子组件 传值**

- 首先明确父和子是谁，``在父引入子，被引入的是子``

  - 父：App.vue
  - 子：MyProduct.vue

- 创建 MyProduct.vue 如下图所示：

  - ![vue_11](./assets/vue_11.jpg)

  - 子组件内，定义变量，准备接收，然后使用变量

  - ```js
    <template>
    	<div class="my-product">
        <h3>标题：{{ title }}</h3>
        <p>价格：{{ price }}</p>
        <p>{{ info }}</p>
      </div>
    </template>
    
    <script>
    export default {
      props: ['title', 'price', 'info']
    }
    </script>
    ```

- 父组件内，要展示封装的子组件：引入组件，注册组件，使用组件，传值进去
  - ![vue_11](./assets/vue_12.jpg)



**总结：**

- 从一个 vue 组件里把值传给另一个 vue 组件的时候，需要父传子技术
- 父传子口诀：
  - 子组件内，props 定义变量，在子组件使用变量
  - 父组件内，使用子组件，属性方式给 props 变量传值



### 05 | 组建通信 - 父向子-配和循环

**目标：父组件 --> 子组件 循环使用 -- 传值**

- 每次循环，变量和组件都是独立的

```vue
<template>
  <div>
    <My_Product 
        v-for="obj in list" :key="obj.id"
        :title="obj.title"
        :price="obj.price"
        :info="obj.info"
    ></My_Product>
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
export default {
  data() {
    return {
      list: [
        {title: ' 开业大酬宾-小龙虾', price: 100, info: '我说好吃,你信吗?', id: 1},
        {title: ' 红烧大鲤鱼', price:  20, info: ' 那你?我是鱼,你要红纱我?', id: 2},
        {title: ' 滋养牛肉虾', price:  200.0, info: ' 你鱼肉下皮肤科盛大付款', id: 3},
        {title: ' 我说我是鱼', price:  1.00, info: '你会使睡吗吗', id: 4},
        ]
    }
  },
  components: {
    My_Product: MyProduct
  }
}
</script>
```



### 06 | 组建通信 - 单向数据流

**目标：从父到子的数据流向，就单向数据流**

![vue_13](./assets/vue_13.jpg)

造成上图的原因是：子组件修改，不通知父级，造成数据不一致

vue 规定 props 里的变量，本身是只读的

> 为何不建议，子组件修改父组件传过来的值？
>
> - 因为父子数据不一致，而且子组件是依赖父组件传入的值
>
> 什么是单向数据流？
>
> - 从父到子的数据流向，叫单向数据流
>
> props 里定义的变量能修改吗？
>
> - 不能，props 里的变量本身是只读的



### 07 | 组建通信 - 子向父 - 自定义事件

**目标：子组件触发父自定义事件方法**

需求：商品组件，实现砍价功能

 ![vue_14](./assets/vue_14.jpg)

前置补充，父 -> 索引 -> 子组件：用于区分哪个子组件

```jsx
<MyProduct
  v-for="(obj, index) in list" :key="obj.id"
  :title="obj.proname"
  :price="obj.proprice"
  :info="obj.info"
  :index="index"
></MyProduct>
```

- 父组件内，绑定自定义事件和事件处理函数

- 语法：

  - `@自定义事件="父methods里的函数名"`

  - ```jsx
    // 父组件内
    <MyProduct
      v-for="(obj, index) in list" :key="obj.id"
      。。。
      :index="index"
      @subprice="fn"
    ></MyProduct>
    
    export default {
      methods: {
        fn(index, price) {
          ........
        }
      }
    }
    ```

- 子组件内，恰当时机，触发父组件给我绑定的自定义事件，导致父 methods 里事件处理函数执行

  - ```vue
    <template>
    	<div class="my-product">
        <h3>标题：{{ title }}</h3>
        <p>价格：{{ price }}元</p>
        <p>{{ info }}</p>
        <p>
          <button @click="kanFn">砍价</button>
      	</p>
      </div>
    </template>
    <script>
    export default {
      props: ["index", "title", "price", "info"]
      methods: {
      	kanFn(){
          this.$emit('subprice', this.index, 1)
        }
    	}
    }
    </script>
    ```

**总结：**

- 当想要去改变父组件的数据时候，需要用到子传父技术
- 实现过程：
  - 父组件内，给组件 `@自定义事件="父 methods 函数"`
  - 子组件内，恰当时机调用 `this.$emit('自定义事件名', 值)`



### 08 | 组件通信 - EventBus

**目标：App.vue 里引入 MyProduct.vue 和 List.vue**

![vue_15](./assets/vue_15.jpg)

- `EventBus` 常用于跨组件通信时使用
- 语法：

  - `scr/EventBus/index.js`：创建空白 vue 对象并导出
  - 要在接收值的组件添加：`eventBus.$on('事件名', 函数体)`
  - 在传值的组件添加：`eventBus.$emit('事件名'， 值)`

示例：

1. 创建空白 vue 并导出 vue：/EventBus/index.js

   ```jsx
   import Vue from 'vue';
   //  导出空白的对象
   export default new Vue()
   ```

   

2. 接收数据方：List.vue

   ```jsx
   // 1. 引入空白 vue 对象
   import eventBus from '../EventBus/index'
   
   export default {
        props:['arr'],
        created() {
             // 接收数据,监听$on 事件
             eventBus.$on('send', (index, price)=> {
                  this.arr[index].proPrice -= price
             })
        },
   }
   ```

3. 发送数据方：MyProduct.vue

   ```jsx
   import eventBus from '../EventBus/index'
   export default {
   		 。。。
        methods: {
             kanFn () {
               		this.$emit('subPrice',this.index,1)
                   eventBus.$emit('send',this.index,1)
             }
        },
   }
   ```

   

**总结：**

- 当 2 个没有引用关系的组件之间要通信传值时，用 `eventBus` 技术
- `eventBus` 的本质是：

  - 空白 vue 对象，只负责 `$on` 和 `$emit`
  - 空白 vue 对象，只负责监听和触发事件
  



## 二、组件进阶

### 01 | vue 的生命周期

**目标：从创建到销毁的整个过程就是 - Vue 实例的 - 生命周期**



#### 01 | 钩子函数

**目标：Vue 框架内置函数，随着组件的生命周期阶段，自动执行**

- 作用：特定的时间点，执行特点的操作

- 场景：组件创建完毕后，可以在 `created 生命周期函数` 中发起 Ajax 请求，从而初始化 data 数据

- 分类：4 大阶段，8 个方法

  | 阶段   | 方法名        | 方法名    |
  | ------ | ------------- | --------- |
  | 初始化 | beforeCreated | created   |
  | 挂载   | beforeMount   | mounted   |
  | 更新   | beforeUpdate  | updated   |
  | 销毁   | beforeDestroy | destroyed |

  

#### 02 | 初始化

1. `new Vue()` ：vue 实例化，组件也是一个小的 vue 实例
2. `Init Event & Lifecycle`：初始化时间和生命周期函数
3. `beforeCreate`：生命周期钩子函数被执行
4. `Init injections & reactivity`：vue 内部添加 data 和 methods 等
5. `created`：生命周期钩子函数被执行，实例创建
6. 接下来是编译模板阶段：开始分析
7. `Has el option ?`：是否有 `el` 选项，检查要挂到哪里
   1. 没有，调用 `$mount`
   2. 有，继续检查 `template` 选项

 ![vue_16](./assets/vue_16.jpg)

**小结：**

- Vue 实例从创建到编译模板执行了两个钩子函数：
  - `beforeCreate`
  - `created`
- `created` 函数触发能获取 data
  - 能获取 data，并不能获取真实的 `DOM`



#### 03 | 挂载

1. `template` 选项检查
   1. 有：编译 `template`，返回 `render` 渲染函数
   2. 没有：编译 `el` 选项对应标签作为 `template`（要渲染的模板）
2. 虚拟 DOM 挂载成真实的 DOM 之前
3. `beforeMount`：生命周期钩子函数被执行
4. `Create....`：把虚拟 DOM 和渲染的数据一并挂到真实的 DOM 上
5. 真实 DOM 挂载完毕
6. `mounted`：生命周期钩子函数被执行

 ![vue_17](./assets/vue_17.jpg)



**小结：**

- Vue 实例冲创建到显示经历了哪些钩子函数？
  - `beforeCreate`
  - `created`
  - `beforeMount`
  - `mounted`
- `created` 函数里，能获取真实的 DOM 吗?
  - 不能获取到真实的 DOM
- 在钩子函数里可以获取到真实 DOM 吗?
  - 可以，在 `mounted` 钩子函数



#### 04 | 更新

1. 当 data 里数据改变，更新 DOM 之前
2. `beforeUpdate`：生命周期钩子函数被执行
3. `Virtual DOM....`：虚拟 DOM 重新渲染，打补丁到真实 DOM
4. `updated`：生命周期钩子函数被执行
5. 当有 data 数据改变：重复这个循环

 ![vue_18](./assets/vue_18.jpg)

**小结：**

- 当数据发生变化并更新页面后，会执行 update 钩子函数
- 在 update 钩子函数里可以获取到更新后的 DOM



#### 05 | 销毁

1. 当 `$destory()` 被调用：比如组件 DOM 被移除。例如：v-if
2. `beforeDestory`：生命周期钩子函数被执行
3. 拆卸数据监视器，子组件和时间监听器
4. 实例销毁后，最后触发一个钩子函数
5. `destoryed`：生命周期钩子函数被执行

   ![vue_19](./assets/vue_19.jpg)



- 一般会在 `beforeDestroy`、`destoryed` 里：
  - 手动消除计时器
  - 定时器
  - 全局时间



### 02 | axios 使用

**目标：axios 是一个专门用于发送 ajax 请求的库**

- 官网： http://www.axios-js.com/
- 特点：
  - 支持客户端发送 `Ajax` 请求
  - 支持服务端 `Node.js` 发送请求
  - 支持 `Promise` 相关方法
  - 支持请求和响应的拦截功能
  - 自动转换 JSON 数据
- axios 底层还是原生 JS 实现，内部通过 `Promise` 封装

```jsx
axios({
  methos: '请求方式'， // GET POST
  url   : '请求地址'， 
  data  : {   			 // 拼接到请求体的参数，POST 请求的参数
  	xxx : xxx,
	},
  params: {          // 拼接到请求体的参数，GET 请求的参数
  	xxx : xxx,    
  },
}).then(res => {
  console.log(res.data) // 从后台返回的结果
}).catch(err => {
  console.log(err)    // 后台报错返回
})
```



**小结：**

- `ajax` 是一种前端异步请求后端的技术
- `ajax` 原理：浏览器 window 接口 `XMLHttpRequest`
- `axios`：基于原生 `ajax + Promise` 技术封装通用于前后端的请求库



#### 01 | axios使用：GET获取数据

**目标：获取所有图书信息**

- 功能：点击调用后台接口，拿到所有数据，打印到控制台

- 接口：接口文档

- 引入：下载 axios，引入后才能使用

- ```jsx
  axios({
    url: 'http://123.57.109.30:3006/api/getbooks'
    method: 'get'
  }).then(function (res) {
    console.log(res)
  })
  ```

**小结：**

- axios 如何发起一次 get 请求
  - 在 method 选项配置为 true，也可以不写，默认就是 get
- axios 函数调用原地结果是什么？
  - 是一个 Promise 对象

- 如何拿到 Promise 里 ajax 的成功或失败的结果
  - then、catch



#### 02 | axios 使用：GET 传参

```jsx
axios({
  url: 'http://123.57.109.30:3006/api/getbooks',
  method: 'get',
  params: {
    bookname: this.bookName,
  }
}).then(function (res) {
  console.log(res)
})
```

- ajax 如何给后台传参
  - 在 url?拼接：查询字符串
  - 在 url 路径上：需要后台特殊处理
  - 在请求体 / 请求头传参给后台
- axios 在 params 配置想，会把参数自动写到 url? 后面



#### 03 | axios 使用：POST 获取数据

```jsx
axios({
  url: 'http://123.57.109.30:3006/api/addbook',
  method: 'POST',
  data: {
    appkey: 'xxxxxxxxxxx',
  }
}).then(function (res) {
  console.log(res)
})
```

- post 请求方式，一般在请求体中传递数据给后台
- axios 在 data 配置选项上，可以把参数自动转入
- axios 默认发送给后台的请求体数据是 json 字符串



#### 04 | axios 全局配置

**目标：配置基础地址，统一管理**

- 可以在官网看到 axios 的很多默认配置

  - `axios.default.baseURL = 'xxxxxxx`

- 修改请求URL ，以后的请求都不用带前缀基地址了，运行时，axios 的 baseURL 会自动拼在前

  ```jsx
  axios({
    url: '/api/addbook',
    method: 'POST',
    data: {
      appkey: 'xxxxxxxxxxx',
    }
  }).then(function (res) {
    console.log(res)
  })
  ```



### 03 | 获取 真实 DOM

**目标：通过 id 或 ref 属性获取原生的 DOM**

- 在 mounted 生命周期，有 2 种方式可以获取原生 DOM

  - 目标标签：添加 id / ref

    ```jsx
    <h1 ref="myH1" id="h">1. ref/id 获取原生 DOM</h1>
    ```

  - 恰当时机，通过 id、ref 属性获取目标标签

    ```jsx
    mounted() {
      	console.log(document.getElementById('h'))
      	console.log(this.$refs.myH1)
    }
    ```



### 04 | 获取组件对象

**目标：通过 ref 属性获取组件对象**

- 创建 Demo 组件，写一个方法

- App.vue 使用 Demo 组件，给 ref 属性，名字随意

  - `<Demo ref="de"></Demo>`

- 恰当时机，通过 ref 属性，获取组件对象，可调用组件对象里的方法等

  - ```ksx
    mounted() {
    	thid.$ref.de.fn()
    }
    ```



**小结：**

- 通过给目标组件添加 ref 属性，通过 `this.$ref.名字` 获取组件对象
- 拿到组件可以调用组件里的属性和方法



### 05 | Vue 异步更新 DOM

**目标：点击改 data，获取原生的 DOM 内容**

1. 创建标签显示数据

   ```jsx
   <p ref="a"> 数字：{{count }}</p>
   <button @click="btnClick">点击+1，观察打印</button>
   ```

2. 点击+1，马上获取原生 DOM 内容

   ```jsx
   mehtods: {
   	btnClick() {
       this.count++;
       console.log('this.$ref.a.innerHTML')
     }
   }
   ```

   > 原因：vue 更新 dom 是异步的



### 06 | $nextTick 使用

**目标：等 DOM 更新后，触发此方法里函数体执行**

- 语法：`this.$nextTick(该函数体)`

- ```jsx
  mehtods: {
  	btnClick() {
      this.count++;
      this.$nextTick(()=> {
  			console.log('DOM 更新后触发 $nextTick 函数')
        console.log('this.$ref.a.innerHTML')
      })
    }
  }
  ```



**小结：**

- data 改变更新 DOM 是异步执行的
- 可以在下面两个方法内访问到更新的 DOM
  - `this.$nextTick` 里的函数体
  - `updated` 生命周期钩子函数
- `$nextTick` 函数原地返回的是 Promise 对象
- 如何在 JS 中主动触发标签的事件呢？
  - 获取到 DOM 对象，调用事件方法



### 07 |组件 name 属性的作用

**目标：组件 name 可用于注册组件名字**

- 组件定义 name 属性和值

  ```jsx
  <script>
  export default {
      name: 'ComNameHh'
  }
  </script>
  ```

- 注册组件可用上面的 name 值

  ```
  <ComNameHh></ComNameHh>
  
  import ComName from '/components/ComName.vue'
  
  export default {
  		[ComName.name]: ComName
  }
  ```

  

### 08 | 动态组件

**目标：多个组件使用同一个挂载点，并动态切换**

效果如下：

 ![vue_20](./assets/vue_20.jpg)



1. 准备被切换的：`UserName.vue` 和 `UserInfo.vue` 2 个组件
2. 引入到 `UseDynamic.vue` 注册
3. 准备变量来承载要显示的 `组件名`
4. 设置挂载点 `<component>`，使用 is 属性来设置要显示哪个组件
5. 点击按钮：修改 comName 变量里的‘’组件名‘’
