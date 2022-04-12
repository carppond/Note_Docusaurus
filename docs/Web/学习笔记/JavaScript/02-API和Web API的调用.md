---
id: JavaScript基础-API
title: JavaScript基础-API
---

## 一、DOM：获取 DOM 元素、修改属性

### 1.1 Web API 基本认知

作用：使用 JS 去操作 HTML 和浏览器

分类：DOM 和 BOM

- DOM：操作 html 和 css
- BOM：操作浏览器



**什么是 DOM**

- DOM：Document Object Model--文档对象模型，是用来呈现以及任意 HTML 或 XML 文档交互的 API
- DOM 是浏览器提供的一套专门用来 `操作网页内容` 的功能
- DOM 作用：开发网页内容特效和实现用户交互
- 简单说：DOM 操作 htm 和 css

**DOM 树**

- 将 HTML 文档以树状结构只管的表现出来，我们称之为文档树或者 DOM树

- 描述网页内容关系的名词

- 作用：文档树直观的体现了标签与标签之间的关系

  ![web_study_48](../../../assets/Web/Study/web_study_48.png)

#### DOM对象

- DOM 对象：浏览器根据 html 标签生成的 js 对象
  - 所有的标签属性都可以在这个对象上面找到
  - 修改这个对象的属性会自动映射到标签身上
- DOM 核心思想：
  - 把网页内容当做对象来处理
- document 对象：
  - 是 DOM 提供的一个对象
  - 所有它提供的属性和方法都是用来访问和操作网页内容的
    - 例如：document.write
  - 网页所有内容都在 document 里面

![web_study_49](../../../assets/Web/Study/web_study_49.png)

### 1.2 获取 DOM 对象

#### 12.1 根据 CSS 选择器来获取 DOM 对象

**选择匹配的第一个元素**

语法：

```jsx
document.querySelector('css选择器')

参数：
包含一个或多个有效的css 选择器字符串

返回值：
css 选择器匹配的第一个元素，一个 HTMLElement 对象
如果没有匹配到，则返回 null

可以直接操作返回值
```

[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)



**选择匹配多个元素**

语法:

```jsx
document.querySelectorAll('css 选择器')

参数：
包含一个或多个有效的 css 选择器字符串

返回值：
css 选择器匹配的 NodeList 对象集合

例如：
document.querySelectorAll('ul li')

无法直接操作，必须通过下标获取对应的 li 才能操作
```

`document.querySelectorAll('css 选择器')`：

- 获取单独是一个伪数组
  -  有长度有索引的数组
  - 但是没有 pop() 、push() 等数组方法
  - 想要得到里面的每一个对象，需要遍历获得



#### 1.2.2 其他获取 DOM 对象的方法

```jsx
// 根据 id 获取一个元素
documment.getElementById('Nav')

// 根据标签获取一类元素，获取页面所有的 div
document.getElementsByTagName('div')

// 根据类名获取元素 获取页面所有类名为 w 的元素
document.getElementsByClassName('w')
```



### 1.2 设置、修改 DOM 元素的内容

DOM 对象都是根据标签生成的，所有操作标签，本质上都是操作 DOM 对象

就是操作对象使用的点语法

如果想要修改标签元素里面的内容，可以使用以下几种方式：

- document.write()
- 对象.innerText 属性
- 对象.innerHTML 属性

**document.write()**

- 只能将文本内容追加到 `</body>` 前面的位置
- 文本中包含的标签会被解析

```jsx
document.write("NIHAO")
document.write('<h3> 你好，世界</h3>')
```



**对象.innerText 属性**

- 将文本内容添加/更新到任意标签位置 
- 文本中包含的标签不会被解析

```jsx
// innerText 将文本添加、更新到任意标签位置
let info = document.getElementById('info')

info.innerText = '<h4> 嗨，我叫李四</h4>'
```

> 只修改内容，不关注标签



**对象.innerHTML 属性**

- 文本内容添加/更新到任意标签位置 
- 文本中包含的标签会被解析

```jsx
box.innerHTML = '<h4> 嗨，我叫李四</h4>'
```

> 解析标签，可以修改内容和添加、更新标签信息



### 1.3 设置、修改 DOM 元素的属性

- 设置、修改元素常用属性
- 设置、修改元素样式属性
- 设置、修改表单元素属性



#### 1.3.1 设置、修改元素常用属性

- 还可以通过 JS 设置/修改标签元素属性，比如通过 src更换 图片 
- 最常见的属性比如: href、title、src 等
- **语法:**

```jsx
对象.属性 = 值

举例：
// 获取元素
let pic = document.querySelector('img')

// 操作元素
pic.src = './images/xxx.png'
pic.title = '这是一张图片'
```



#### 1.3.2 设置、修改元素样式属性

还可以通过 JS 设置/修改标签元素的样式属性。

- 比如通过 轮播图小圆点自动更换颜色样式

- 点击按钮可以滚动图片，这是移动的图片的位置 left 等等 

- 学习路径:

  - 通过 style 属性操作CSS

  - 操作类名(className) 操作CSS

  - 通过 classList 操作类控制CSS

##### 1.3.2.1 通过 style 属性操作CSS

语法：

```
对象.style.样式属性 = 值

例如：
let box = document.querySelector('.box')
// 修改背景颜色
box.style.backgroundcolor = 'red'
box.style.widht = '100px'
box.style.marginTop = '50px'
```

> 注意：
>
> - 修改样式通过 style 属性引出
> - 如果属性有 - 连接符，需要转换为小驼峰命名法
> - 赋值的时候，需要的时候不要忘记加 css 单位



##### 1.3.2.2 操作类名(className) 操作CSS

如果修改的样式比较多，直接通过 `style` 属性修改比较繁琐，我们可以通过借助与 css 类名的形式

语法：

```jsx
// active 是一个 css 类名
元素.className = 'active'
元素.className = '类名1 类名2 类名3....'
```

> 注意：
>
> - 由于 class 是关键字，所以使用 className 去代替
> - className 是使用新值替换旧值，如果需要添加一个类，需要保留之前的类名



##### 1.3.2.3 通过 classList 操作类控制CSS

为了解决 `className` 容易覆盖以前的类名，我们可以通过 `classList` 方式追加和删除类名

语法：

```jsx
// 追加一个类 
元素.classList.add('类名')
元素.classList.add('类名','类名','类名','类名'....)

// 删除一个类
元素.classList.remove('类名')
元素.classList.remove('类名','类名','类名','类名'....)

// 切换一个类：如果当前元素有这个类，就移除掉；如果当前类没有这个类就添加上
元素.classList.toggle('类名')
```



#### 1.3.3 设置、修改表单元素属性

表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框 正常的有属性有取值的 跟其他的标签属性没有任何区别

- 获取: DOM对象.属性名
- 设置: DOM对象.属性名 = 新值

```jsx
表单.value = '用户名'
表单.type = 'password'
```

表单属性中添加就有效果，移除就没有效果，一律使用布尔值表示。如果为true：代表添加了该属性；如果是 false：代表移除了该属性

比如: disabled、checked、selected



### 1.4 定时器--间歇函数

- 网页中经常会需要一种功能:每隔一段时间需要自动执行一段代码，不需要我们手动去触发 
- 例如:网页中的倒计时
- 要实现这种需求，需要定时器函数
- 定时器函数有两种，今天我先讲间歇函数

![web_js_01](../assets/web_js_01.png)

#### 1.4.1 定时器函数的基本使用

定时器函数可以开启和关闭定时器

**开启定时器**

```jsx
setInterval(函数，间隔时间)

- 作用：每个一段时间调用这个函数
- 间隔时间单位是毫秒
```

示例：

```jsx
function repeat() {
  	console.log("iOS 程序员，就是头发多")
}
// 每隔一秒调用 repeat 函数
setInterval(repeat, 1000)
```

> 注意：
>
> - 函数名字不需要加括号
> - 定时器返回的是一个 id 数字



** 关闭定时器**

```jsx
let 变量名 = setInterval(函数名, 间隔时间)
clearInterval(变量名)
```

一般不会刚创建就听着，则是满足一定条件再停止

### 总结：

- 根据 CSS 选择器来获取 DOM 对象
  - `document.querySelector('css选择器')` ：获取选择器的第一个元素
  - `document.querySelectorAll('css选择器')`：获取选择所有的元素，是一个伪数组。
- 根据 id 获取一个元素：documment.getElementById('Nav')
- 根据标签获取一类元素，获取页面所有的 div：document.getElementsByTagName('div')
- 根据类名获取元素 获取页面所有类名为 w 的元素：document.getElementsByClassName('w')
  



## 二、DOM 事件基础

### 2.1 事件

- 事件：
  - 事件是在编程时系统内发生的动作或者发生的事情。比如用户在网页上单机一个按钮

- 事件监听：

  - 让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为注册事件

- 语法：

  ```jsx
  元素.addEventListener('事件', 要执行的函数)
  ```

- 事件监听三要素：

  - 事件源：哪个 dom 元素被事件触发了，要获取 dom 元素
  - 事件：用什么方式触发，比如鼠标点击 click，鼠标经过 mouseover 等
  - 事件调用的函数：要做什么事



#### 2.1.1 事件监听：

```jsx
// 获取元素
let btn = document.querySelector('button')

//  事件监听：注册事件
btn.addEventListener('click', function(){
  	alert('被点击了')
})


```

注意：

- 事件类型要加引号
- 函数是点击之后再去执行，每次点击都会执行一次



#### 2.1.2 事件类型

- 鼠标事件：鼠标触发
  - click：鼠标点击
  - mouseenter：鼠标经过
  - mouseleave：鼠标离开
- 焦点事件：表单获取光标
  - focus：获取焦点
  - blur：失去焦点
- 键盘事件：键盘触发
  - keydown：键盘按下触发
  - keyup：键盘抬起触发
- 文本事件：表单输入触发
  - input：用户输入事件



### 2.2 高级函数

高阶函数可以被简单理解成函数的高级应用，JS 中函数可以被当成 `“值” `来对待，基于这个特性实现函数的高级应用

`“值”` 就是 JS 中的数据，如数值、字符串、布尔、对象等



#### 2.2.1 函数表达式

函数表达式和普通函数并无本质上的区别：

```jsx
// 函数表达式与普通函数本质上是一样的
let counter = function (x, y) {
  	return x + y
}

// 调用函数
let result = counter(1,2)
console.log(result)
```

- 普通函数的声明与调用无顺序限制，推荐做法先声明再调用

- **函数表达式必须要先声明再调用**



#### 2.2.2 回调函数

如果将函数 A 作为参数传递给函数 B 时，我们称函数 A 是回调函数

简单理解：当一个函数当做参数传递给另外一个函数时，这个函数就是回调函数

例如：

```
function fn （） {
		console.log('我是回调函数')
}
// fn 传递给了 setInterval，fn 就是回调函数
setInterval(fn, 1000)

box.addEventListener('click', function() {
		console.log('我是回调函数')
})
```



### 环境变量

环境对象指的是函数内部特殊的变量 this，它代表着当前函数运行时所处的环境

作用：弄清楚 this 的指向，可以让我们代码更加简洁

- 函数的调用方式不同，this 指代的对象也不同
- `谁调用，this 就是谁` 是判断 this 指向的粗略规则
- 直接调用函数，其实相当于是 window 函数，所以 this 指代 window



## 三、DOM-节点操作、时间对象、重绘和回流

### 3.1 DOM 节点

- DOM 节点：DOM 树里每一个内容都被称为节点

- 节点类型：

  - 元素节点：.
    - 所有的标签。比如：div、body、span
    - html 是根节点
  - 属性节点：
    - 所有的属性。比如：href、title、class、id等
  - 文本节点：所有的文本。比如标签里面的文字
  - 其他

  ![web_js_02](../assets/web_js_02.png)

#### 3.1.1 查找节点

节点关系：

- 父节点
- 子节点
- 兄弟节点



**父节点查找**：

- parenNnode 属性

- 返回最近一级的父节点，找不到返回 null

- ```jsx
  子元素.parenNode
  ```



**子节点查找：**

- childNodes：获取所有子节点，包括文本节点（空格、换行）、注释节点等
- children：
  - 仅获得所有元素节点
  - 返回的是一个伪数组
  - `父元素.children`



**兄弟关系查找：**

- 下一个兄弟节点：`nextElementSibling` 属性
- 上一个兄弟节点：`previousElementSibling` 属性



#### 3.1.2 增加节点

很多情况下，我们需要在页面中增加元素。比如，点击发布按钮，可以新增一条消息

一般情况下，新增节点，按照如下操作：

- 创建一个新的节点
- 把创建的节点放入到指定的元素内部



学习路线：

- 增加节点
- 追加节点



**增加节点：**

创建节点：

- 即创建一个新的网页元素，在添加到网页内，一般先创建节点，然后在插入节点

- 创建元素节点方法：

- ```jsx
  // 创建一个新的元素节点
  document.createElement('标签名')
  ```



**追加节点：**

- 要想在界面看到，还得插入到某个父元素中

- 插入到父元素的最后一个子元素：

  ```jsx
  // 插入到这个父元素的最后
  父元素.appendChild(要插入的元素)
  ```

- 插入到父元素中某个子元素的前面

  ```jsx
  // 插入到某个子元素的前面
  父元素.insertBefore(要插入的元素， 在某个元素前面)
  ```

  

**克隆节点**

- 特殊情况下，新增节点，需要按照如下操作：

  - 复制一个原有的节点
  - 把复制的节点放入到指定的元素内部

- 克隆节点

  ```jsx
  元素.cloneNode(布尔值)
  ```

- cloneNode 会克隆出一个跟原标签一样的元素，括号内传入布尔值

  - 若为 true，则代表克隆时会包含后代节点一起克隆
  - 若为 false，则代表克隆时不包含后代节点
  - 默认 false



#### 3.1.3 删除节点

- 若把一个节点在网页中已不需要时，可以删除它

- 在 JS 原生 DOM 操作中，要删除元素必须通过 `父元素删除`

- 语法

  ```html
  父元素.removeChild(要删除的元素)
  ```

> 如果不存在父元素关系则删除不成功
>
> 删除节点和隐藏节点（display：none）有区别：
>
> - 隐藏节点还是存在
> - 删除，则是从 html 中删除节点



### 3.2 时间对象

- 时间对象：用来表示时间的对象
- 作用：可以得到当前系统时间



学习路径：

- 实例化
- 时间对象方法
- 时间戳



#### 3.2.1 实例化

在代码中发现 new 关键字时，一般将这个操作称为实例化

创建一个实践对象并获取时间：

- 获取当前时间：`let date = new Date()`
- 获取指定时间：`let date = new Date('1949-10-10')`



#### 3.2.1 时间对象方法

因为时间对象返回的数据我们不能直接使用，所以需要转换为实际开发中常用的格式

|      方法      |        作用        |         说明         |
| :------------: | :----------------: | :------------------: |
| getFullYeaer() |      获得年份      |    获取 四位年份     |
|   getMonth()   |      获得月份      |     取值：0 ~ 11     |
|   getDate()    | 获得月份中的每一天 | 不同月份取值也不相同 |
|    getDay()    |      获得星期      |     取值：0 ~ 6      |
|   getHours()   |      获得小时      |     取值：0 ~ 23     |
|  getMinutes()  |      获得分钟      |     取值：0 ~ 59     |
|  getSeconds()  |      获得秒数      |     取值：0 ~ 59     |



#### 3.2.1 时间戳

时间戳：是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式

三种方式获取时间戳：

- 使用 `getTime()` 方法：

  ```jsx
  // 实例化
  let date = new Date()
  
  // 获取时间戳
  console.log(date.getTime())
  ```

- `简写 +new Date()`

  ```jsx
  console.log(+new Date()) 
  ```

- 使用`Date.now()`

  ```
  console.log(Date.now())
  ```

  - 无需实例化
  - 当时只能获取当前的时间戳，而前面两种可以返回指定时间的时间戳



### 3.3 重绘和回流

浏览器是如何进行界面渲染的

- 解析(Parser)HTML，生成DOM树(DOM Tree)
- 同时解析(Parser) CSS，生成样式规则 (Style Rules)
- 根据DOM树和样式规则，生成渲染树(Render Tree)
- 进行布局Layout(回流/重排):根据生成的渲染树，得到节点的几何信息(位置，大小) 
- 进行绘制Painting(重绘):根据计算和获取的信息进行整个页面的绘制
- display:展示在页面上

![web_js_03](../assets/web_js_03.png)





#### 3.3.1 重绘和回流(重排)

- **回流**(**重排**)
  - 当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过程称为 回流。

- **重绘** 
  - 由于节点(元素)的样式的改变并不影响它在文档流中的位置和文档布局时(比如:color、background-color、outline等), 称为重绘。
- **重绘不一定引起回流，而回流一定会引起重绘。**



**会导致回流(重排)的操作:**

- 页面的首次刷新
- 浏览器的窗口大小发生改变 
- 元素的大小或位置发生改变 
- 改变字体的大小

- 内容的变化(如:input框的输入，图片的大小) 
- 激活css伪类 (如::hover)
- 脚本操作DOM(添加或者删除可见的DOM元素)

> 简单理解就是影响到布局了，就会有回流





## 额外知识

- console.dir()：打印对象所有的属性