---
id: vue组件基础+进阶
title: 02 | vue组件基础+进阶
---

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
  



### 09 | vue 的生命周期

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



### 10 | axios 使用

