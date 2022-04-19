---
id:  ajax+http+mysql
title: 01 | ajax+http+mysql
---

## 一、ajax

### 1.1 URL

URL（全称是UniformResourceLocator）中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。

**URL地址的组成部分：**

一般由三部分组成：

- 客户端与服务器之间的通信协议
- 存有该资源的服务器名称
- 资源在服务器上的具体的位置

![web_js_29](../assets/web_js_29.png)

### 1.2 客户端与服务器的通信过程

![web_js_30](../assets/web_js_30.png)

客户端：

- 打开浏览器
- 输入要访问的网站地址
- 回车，向服务器发起资源请求

服务器：

- 服务器接收到客户端发来的资源请求
- 服务器在内部处理这次请求，找到相关资源
- 服务器把找到的资源，响应（发送）给客户端

注意：

- 客户端与服务器之间的通信过程，分为 `请求---处理---响应` 三个步骤
- 网页中的每一个资源，都是通过 `请求---处理---响应` 的方式从服务器获取回来的



### 1.3 服务器对外提供了哪些资源

数据是网页的灵魂

- HTML 是网页的骨架
- CSS 是网页的颜值
- JavaScript 是网页的行为
- 数据是网页的另外

HTML、CSS、JS 皆为数据服务。



### 1.4 网页中如何请求数据

数据，也是服务器对外提供的一种资源。只要是资源，必然要通过 `请求 -- 处理 -- 响应` 的方式进行获取

如果在网页中请求服务器删搞的资源数据，需求用到 `XMLHTTPRequest` 对象

XMLHttpRequest（简称 xhr）是浏览器提供的 js 成员，通过它，可以请求服务器上的数据资源。

最简单的用法：``var xhrObj = new XMLHttpRequest()``



### 1.5 资源的请求方式

客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为 get 和 post 请求。

- get 请求通常用于获取服务端资源（向服务器要资源）
  - 例如：根据 URL 地址，从服务器获取 HTML 文件、css 文件、js文件、图片文件、数据资源等

- post 请求通常用于向服务器提交数据（往服务器发送资源）
  - 例如：登录时向服务器提交的登录信息、注册时向服务器提交的注册信息、添加用户时向服务器提交的用户信息等各种数据提交操作



### 1.6 了解 Ajax

Ajax 的全称是 Asynchronous Javascript And XML（异步 JavaScript 和 XML）。

通俗的理解：在网页中利用 XMLHttpRequest 对象和服务器进行数据交互的方式，就是Ajax。

浏览器中提供的 XMLHttpRequest 用法比较复杂，所以 `jQuery` 对 `XMLHttpRequest` 进行了封装，提供了一系列 `Ajax` 相关的函数，极大

地降低了 Ajax 的使用难度。

jQuery 中发起 Ajax 请求最常用的三个方法如下：

- `$get()`  
- `$post()`
- `$ajax`

### 1.7 jQuery 中的 Ajax

#### 1.7.1 get

jQuery 中 `$.get()` 函数的功能单一，专门用来发起 `get` 请求，从而将服务器上的资源请求到客户端来进行使用。

$.get() 函数的语法如下：

```jsx
$.get(url, [data], [callback])

// 例如：
$.get('http://www.baidu.com')
$.get('http://www.baidu.com', {name:'lisi'})
$.get('http://www.baidu.com', {name:'lisi'}, function(res){
  	// 回调
  	// res 服务器回调的数据
})
```

- url：要请求的资源地址
- data：Object 类型，非必选，请求资源期间要携带的参数
- callback：function，非必要，请求成功时的回调函数



**$.get() 发起不带参数的请求**

使用 $.get() 函数发起不带参数的请求时，直接提供请求的 URL 地址和请求成功之后的回调函数即可，示例代码如下：

```jsx
$.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
  	console.log(res); // res 是服务器返回的数据
})
```

示例：

```jsx
<body>
     <button id="btnGet">发起不带参数的 get 请求</button>
     <script src="./lib/jquery.js"></script>

     <script>
          $('#btnGet').click(function() {
               $.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
                    console.log(res);
               })
          })
     </script>
</body>
```



**$.get() 发起带参数的请求**

使用 $.get() 函数发起不带参数的请求时，直接提供请求的 URL 地址和请求成功之后的回调函数即可，示例代码如下：

```jsx
$.get('http://www.liulongbin.top:3006/api/getbooks', {id: 1}, function(res) {
  	console.log(res); // res 是服务器返回的数据
})
```

示例：

```jsx
<body>
     <button id="btnGet">带有参数的 get 请求</button>
     <script src="./lib/jquery.js"></script>
     <script>
          $('#btnGet').click(function() {
               $.get('http://www.liulongbin.top:3006/api/getbooks', {id:1}, function (res) {
                    console.log(res);
               })
          })
     </script>
</body>
```



#### 1.7.2 post

jQuery 中 `$.post()` 函数的功能单一，专门用来发起 post 请求，从而向服务器提交数据。

`$.post()` 函数的语法如下：

```jsx
$.post(url, [data], [callback])
```

- url：要请求的资源地址
- data：Object 类型，非必选，请求资源期间要携带的参数
- callback：function，非必要，请求成功时的回调函数

示例：

```jsx
$('#btnGet').click(function () {
     $.post('http://www.liulongbin.top:3006/api/getbooks',{bookname: '水浒传', author: '施耐庵', publisher: '上海图书出版社'}, function (res) {
          console.log(res);
     })
})
```



#### 1.7.3 Ajax

相比于 `$.get()` 和 `$.post()` 函数，jQuery 中提供的 `$.ajax()` 函数，是一个功能比较综合的函数，它允许我们对 Ajax 请求进行更详

细的配置。$.ajax() 函数的基本语法如下：

```jsx
$.ajax({
   type: '', // 请求的方式，例如 GET 或 POST
   url: '',  // 请求的 URL 地址
   data: { },// 这次请求要携带的数据
   success: function(res) { } // 请求成功之后的回调函数
})
```



**使用 ajax 发起 get 请求：**

示例：

```js
// GET
$.ajax({
      type: 'GET',
      url: 'http://www.liulongbin.top:3006/api/getbooks',
      data: {id:1},
      success: function (res) {
           console.log(res);
      }
})
// POST
$.ajax({
    type: 'POST',
    url: 'http://www.liulongbin.top:3006/api/addbook',
    data: { 
         bookname: '水浒传',
         author: '施耐庵',
         publisher: '上海图书出版社'},
    success: function(res) {
         console.log(res);
    }
})
```



## 二、模板引擎

### 2.1 渲染 UI 结构时遇到的问题

```jsx
var rows = []
$.each(res.data, function (i, item) { // 循环拼接字符串
    rows.push('<li class="list-group-item">'+ item.content +'<span class="badge cmt-date">评论时间：'+ item.time +'</span><span class="badge cmt-person">评论人：'+ item.username +'</span></li>')
})
$('#cmt-list').empty().append(rows.join('')) // 渲染列表的UI结构
```

上述代码是通过字符串拼接的形式，来渲染UI结构。

如果UI结构比较复杂，则拼接字符串的时候需要格外注意引号之前的嵌套。且一旦需求发生变化，修改起来也非常麻烦。



### 2.2 什么是模板引擎

模板引擎，顾名思义，它可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML页面。

![web_js_31](../assets/web_js_31.png)

模板引擎的好处：

- 减少了字符串的拼接操作
- 使代码结构更清晰
- 使代码更易于阅读和维护



### 2.3 art-template 模板引擎

`art-template` 是一个简约、超快的模板引擎。中文官网首页为 http://aui.github.io/art-template/zh-cn/index.html

![web_js_32](../assets/web_js_32.png)



**art-template 的安装：**

在浏览器中访问 http://aui.github.io/art-template/zh-cn/docs/installation.html 页面，找到下载链接后，鼠标右键，选择“链接另

存为”，将 `art-template` 下载到本地，然后，通过 <script> 标签加载到网页上进行使用。

![web_js_33](../assets/web_js_33.png)



#### 2.3.1  art-template 模板引擎的基本使用

使用步骤：

- 导入 `art-templa`
- 定义数据
- 定义模板
- 调用 `template` 函数
- 渲染 `HTML` 结构



#### 2.3.2  art-template 的标准语法

`art-template` 提供了 `{{ }}` 这种语法格式，在 ` {{ }}`  内可以进行变量输出，或循环数组等操作，这种  `{{ }}` 语法在 `art-template` 中被称为

标准语法。

**标准语法：输出**

```jsx
{{value}}
{{obj.key}}
{{obj['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```

在 `{{ }}` 语法中，可以进行变量的输出、对象属性的输出、三元表达式输出、逻辑或输出、加减乘除等表达式输出。



**标准语法：原文输出**

```jsx
{{@ value}}
```

如果要输出的 `value` 值中，包含了 `HTML` 标签结构，则需要使用原文输出语法，才能保证 `HTML` 标签被正常渲染。 



**标准语法：条件输出**

如果要实现条件输出，则可以在 `{{ }}` 中使用 `if … else if … /if` 的方式，进行按需输出。

```jsx
{{if value}} 按需输出的内容 {{/if}}

{{if v1}} 按需输出的内容 {{else if v2}} 按需输出的内容 {{/if}}
```



**标准语法：循环输出**

如果要实现循环输出，则可以在 `{{ }}` 内，通过 `each` 语法循环数组，当前循环的索引使用 `$index` 进行访问，当前的循环项使用 `$value` 进行访问。

```jsx
{{each arr}}
    {{$index}} {{$value}}
{{/each}}
```



**标准语法：过滤器**

![web_js_34](../assets/web_js_34.png)

过滤器的本质，就是一个 `function` 处理函数。

```jsx
{{value | filterName}}
```

过滤器语法类似管道操作符，它的上一个输出作为下一个输入。

定义过滤器的基本语法如下：

```jsx
template.defaults.imports.filterName = function(value){/*return处理的结果*/}
```

```jsx
<div>注册时间：{{regTime | dateFormat}}</div>
```

定义一个格式化时间的过滤器 dateFormat 如下：

```jsx
 template.defaults.imports.dateFormat = function(date) {
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()

    return y + '-' + m + '-' + d // 注意，过滤器最后一定要 return 一个值
 }
```

