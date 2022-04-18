---
id: JavaScript高级-jQuery
title: jQuery
---

### 01- 认识 jQuery

- JavaScript 类库：js 文件
- 封装了很多简单易用的方法：考虑了浏览器兼容问题
- 多大多数操作来简化 DOM
- 提升开发效率
- ![web_js_25](../assets/web_js_25.png)



- 下包：把 jQuery 下载到本地
- 导包：在希望使用的页面中导入下载好的 jQuery

官网地址：https://jquery.com/

### 02- 选择器

`jQuery` 中通过选择器来获取 DOM 节点，功能类似于原生的 `querySelectorAll` 方法，支持的选择器与 css 的选择器几乎一致。

语法：

```jsx
$('选择器')

例如：
$('选择器').css('backgroundColor', 'yellow')
// 类选择器
$('.box').css('backgroundColor', 'yellow')

// id 选择器
$('#box').css('backgroundColor', 'yellow')

// 后代选择器
$('.box span').css('backgroundColor', 'yellow')
```



### 03 - jQuery 对象

`jQuery` 中利用选择器获取到的并非原生的 DOM 对象，而是`jQuery` 对象

`jQuery` 对象和 DOM 对象不能混用

**DOM 对象转换成 jQuery 对象：**

```jsx
$(DOM对象)
```

示例：

```jsx
<Script>
		let li = document.querySelector('li')
  	let $li = $('li')
  
  	// JQ 对象的方法
  	$li.css('backgroundColor','pink')
  
	  // dom 对象转 JQ 对象
  	let $li2 = $(li)
  	$li2.css('backgroundColor', 'red')
  
</Script>
```

> JQ 对象的方法，比如 css 方法都是放在`原型`上的



### 04 - 事件绑定

在 `jQuery` 中以原生时间类型的名称为依据，疯转公里相对应的事件处理方法

```jsx
$('选择器').事件名(函数)

例如：
$('li').click(function () {
  	// 执行的逻辑
})
```

示例一：点击事件

```jsx
示例一：
// 通过类选择器获取 box
let $box =  $('.box')
// 更改其背景色
$box.css('backgroundColor','red')
console.log($box);

// 添加点击事件
$box.click(function () {
     console.log('11111111111');
})
```

示例二：焦点事件

```jsx
// 添加焦点事件
// 1. 通过属性选择器获取到
let $text = $('input[type=text]')
// 获取焦点事件
$text.focus(function (){
     console.log('2222222222');
})
// 失去焦点事件
$text.blur(function (){
     console.log('3333333333');
})
```

- 事件名开头不需要写 on

- 回调函数中的 this 就是触发事件的 dom 元素



### 05 - 链式编程

`链式编程` 通过点 （.）把多个操作连续的写下去，形成和链子一样的结构

语法：

```jsx
$(选择器).事件名(回调函数).事件名(回调函数).事件名(回调函数)

例如
$(.box).click(回调函数).mouseenter(回调函数).mouselevea(回调函数)
$(.text).focus(回调函数).blur(回调函数)
```

示例：

普通写法

```jsx
// 1. 通过属性选择器获取到
let $text = $('input[type=text]')
// 获取焦点事件
$text.focus(function (){
     console.log('2222222222');
})
// 失去焦点事件
$text.blur(function (){
     console.log('3333333333');
})
```

链式编程：

```jsx
// 1. 通过属性选择器获取到
let $text = $('input[type=text]')
// 获取焦点事件
$text.focus(function (){
     console.log('2222222222');
}).blur(function (){
     console.log('3333333333');
})

```



大部分 JQ 对象方法的返回值还是同一个对象



### 08 - 内容操作

`jQuery` 中封装了设置和读取网页元文本内容的方法 

语法：

```jsx
// 设置
$('选择器').html('内容')
$('选择器').text('内容')

// 读取
$('选择器').html()
$('选择器').text()
```

- 设置时：html 方法解析标签，text 不解析标签
  - 返回的是一个 JQ 对象
- 取值时：html 方法获取标签，text 只获取文本
  - 返回的是一个字符串
- **设置支持链式编程，取值时不支持链式编程**



### 09 - 过滤方法.

`jQuery` 中封装了过滤方法，对 `jQuery` 对象中的 DOM 元素再次筛选

语法：

```jsx
// 匹配第一个元素
.first()

// 匹配最后一个元素
.last()

// 根据索引匹配元素
.eq(索引)
```

- `eq` 方法的索引从 `0` 开始
- 返回的是 `jQuery` 对象

示例：

```jsx
<body>
     <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
     </ul>
     <script src="./jquery-3.6.0.min.js"></script>
     <script>
          $('li').css({
               background:'pink'
          })

          $('li').first().css({
               background:'red'
          })

          $('li').eq(1).css({
               background:'green'
          })
          $('li').last().css({
               background:'skyblue'
          })
     </script>
</body>
```

![web_js_26](../assets/web_js_26.png)



### 10 - 样式操纵

`jQuery` 中队样式的操作进行封装，可以设置或获取样式

#### 设置样式

语法：

```
// 键值对设置
.css('样式名', '值')
.css('backgroundColor', 'red')
.css('color', 'red')
.css('width', '20px')
.css('height', '100px')
```

数值类的样式省略单位，会默认使用 px

**对象方式设置：**

```jsx
// 对象方式设置
.css(对象)

例如：
.css({
  	backgroundColor: 'red',
  	color: 'red',
  	widht: '200px',
  	height: 100 
})
```



#### 获取样式

语法:

```jsx
.css('样式名')

// 示例
.css('widht')
```

#### 总结：

- 设置数值类的样式时省略单位，默认值是：px
- css 方法设置的样式在元素的什么位置？：行内：`<button style='xxxxxxxxxxx'>`
- css 方法取值时是否需要传递参数?：需要



### 11 - 样式操作

`jQuery` 中对属性的操作进行封装 , 可以设置、获取和删除属性

测试代码：

```jsx
<a href='https://baidu.com'>黑马程序员</a>
<img src='./logo.png' info='黑马程序员'></img>
```

**语法：**

```jsx
// 赋值
.attr('属性名', '值')

// 取值
.attr('属性名')

// 删除属性
.removeAttr('属性名')

```



### 12 - 操作 value

`jQuery` 中封装了操纵表单元素value属性的方法，可以取值和赋值

语法：

```jsx
// 1. 赋值
.val('参数')

// 2. 取值
.val()
```

示例：

```jsx
// 给类 text 设置值
$(.text).val('我我我')
```



### 13 - 查找方法

`jQuery` 中封装了查找元素的方法，可以基于元素的结构关系查找新的元素

语法：

```jsx
// 父元素
.parent()

// 子元素：
// 可以传入选择器也可以不传
.children()
.children('选择器')

// 兄弟元素
// 可以传入选择器也可以不传
.siblings()
.siblings('选择器')

// 后代元素
// 必须传入选择器
.find('选择器')
```

示例：

```jsx
<body>
     <ul>
          <li class="first">1</li>
          <li class="first1">2</li>
          <li class="first2">3</li>
          <li class="first3">4</li>
          <li class="first4">5</li>
     </ul>
     <script src="./jquery-3.6.0.min.js"></script>
     <script>
          // 父元素
          $('.first').parent().css('backgroundColor','pink')

          // 子元素
          $('ul').children().css('color','red')
          $('ul').children('.first').css('color','#fff')

          // 兄弟元素
          $('.first').siblings().css('backgroundColor','red')
          $('.first').siblings('.first1').css('backgroundColor','#fff')

          // 后代元素
          $('ul').find('li').css('backgroundColor','#fff')
     </script>
</body>
```



### 14 - 操作类名

`jQuery` 中封装了为网页元素添加、移除、检测、切换类名的方法。

语法：

```jsx
// 添加类名
.addClass('类名')

// 移除类名
.removeClass('类名')

// 判断类名，返回布尔值
.hasClass('类名')

// 切换类名: 存在类名，就移除。不存在类名就添加上去
.toggleClass('类名')
```



### 15 - 事件进阶

` jQuery` 中封装了更为灵活的 on/off、one 方法处理 DOM 事件

测试代码：

```jsx
// 绑定点击事件
$('选择器').click(function(){})

// 绑定获取焦点事件
$('选择器').focus(function(){})
```

语法：

```jsx
// 注册事件
$('选择器').on('事件名', function(){})

// 移除指定事件
$('选择器').off('事件名')

// 移除所有事件
$('选择器').off()

// 注册一次性事件
$('选择器').one('事件名', function(){})
```

> On、one 方法回调函数中的 this 是触发事件的 DOM 元素



### 16 - 触发事件

 `jQuery` 中如何通过代码的方式触发绑定的事件

测试代码：

```jsx
// 初始状态
$('.words span').text(0)
$('.public_btn').addClass('disabled')

// 字数统计
$(.input-box textarea).on('input' function() {
  	let lenght = $(this).val().length
    // 优化
    $('.words span').text(length)
  	if (lenght === 0) {
      	$('public-btn').addClass('disabled')
    } else {
      	('public-btn').removeClass('disabled')
    }
})

```

语法：

```jsx
// 直接触发
.事件名

// trigger 触发
.trigger('事件名')

// 触发自定义事件
.trigger('自定义事件')

// 注册自定义事件
.on('自定义事件', function(){})
```

> 自定义事件是一种进阶用法，目前了解就可以

示例：

```jsx
$('.btn').click(function() {
  	console.log('1111')
})
// 直接触发点击事件
$('.btn').click()
```



### 17 - window 事件绑定

使用 jQuery 为window对象绑定事件

测试代码：

```jsx
// 滚动
window.addEventListener('scroll', function(){
  
})

$('window').scroll(function(){})

// 点击
window.addEventListener('click', function(){
  
})
$('window').click(function(){})

```

语法：

```jsx
// 滚动
$(window).scroll(function(){})

// 点击
$(window).click(function(){})
```

‘’选择器‘’ 可以直接传入 window 对象，不需要写成选择器



### 18 - 获取位置

通过 `jQuery` 直接获取元素的位置

语法：

```jsx
// 取值
$('选择器').offset()

取值
$('选择器').position()

返回值
(top: 126, left: 59)

```

- 参照物不同
  - `offset` 参照 `html` 标签
  - `position` 参照离他最近有定位的祖先元素
- margin
  - `offset` 会把外边距 `margin` 计算进去
  - `position` 以外边距 `margin` 为边界，不计算  `margin`



### 19 - 滚动距离

通过 `jQuery` 获取元素的滚动距离

语法：

```jsx
// 取值
$('选择器').scrollLeft()
$('选择器').scrollTop()

// 赋值
$('选择器').scrollLeft(值)
$('选择器').scrollTop(值)
```



### 20 - 显示 & 隐藏动画

通过 `jQuery` 以动画的方式切换元素的显示&隐藏

语法：

```jsx
// 显示
$('选择器').show()
$('选择器').show(持续时间)

// 隐藏
$('选择器').hide()
$('选择器').hide(持续时间)

// 显示&隐藏
$('选择器').toggle()
$('选择器').toggle(持续时间)
```

- 毫秒为单位



### 21 - 淡入 & 淡出动画

通过 `jQuery` 以淡入&淡出的方式切换元素的显示隐藏

语法：

```jsx
// 淡入
$('选择器').fadeln()
$('选择器').fadeln(持续时间)

// 淡出 
$('选择器').fadeOut()
$('选择器').fadeOut(持续时间)

// 淡入 & 淡出
$('选择器').fadeToggle()
$('选择器').fadeToggle(持续时间)
```

- 毫秒为单位



### 22 - 展开 & 收起动画

通过 `jQuery` 以展开 & 收起的方式切换元素的显示隐藏

通过 `jQuery` 以展开(高度增大)&收起(高度减小)的方式切换元素的显示隐藏

语法：

```jsx
// 展开
$('选择器').slideDown()
$('选择器').slideDown(持续时间)

// 收起
$('选择器').slideUp()
$('选择器').slideUp(持续时间)

// 展开 & 收起
$('选择器').slideToggle()
$('选择器').slideToggle(持续时间)
```

- 毫秒为单位



### 23 - 动画队列及停止方法

通过 `jQuery` 为元素设置的多个动画会依次添加到动画队列中，并根据添加的顺序依次播放

```
// 动画队列
['动画 1']
['动画 1', '动画 2']
['动画 1', '动画 2','动画 3']
['动画 1', '动画 2','动画 3' ...]
```

语法：

