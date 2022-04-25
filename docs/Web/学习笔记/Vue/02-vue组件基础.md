---
id: vue组件基础
title: 02 | vue组件基础
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

- ```jsx
  ```



**总结：**

- 当 2 个没有引用关系的组件之间要通信传值时，用 `eventBus` 技术

- `eventBus` 的本质是：

  - 空白 vue 对象，只负责 `$on` 和 `$emit`

  

  

  

