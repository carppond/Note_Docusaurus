---
id: JavaScript基础
title: 01 | JavaScript 基础
---

# JavaScript 基础 - 第1天

javascrpt 是一种运行在客户端 / 浏览器的编程语言，实现人机交互效果。

作用：

- 网页特效：监听用户的一些行为让网页作出对应的反馈
- 表单验证：针对表单数据的合法性进行判断
- 数据交互：获取后台数据，渲染到前端

JavaScript 的组成：

- `ECMAScript`：JavaScript 的语言基础
- Web APIs：
  - dom：页面文档对象模型
  - bom：浏览器对象模型

`ECMAScript`：规定了 js 基础语法核心只是

- 比如变量、分支语句、循环语句、对象等等

Web APIS：

- DOM 操作文档，比如对页面元素进行移动、大小、添加删除操作等操作
- BOM 操作浏览器，比如页面弹窗，检测窗口宽度，存储数据到浏览器等等

JavaScript 权威网站: `MDN`



> 了解变量、数据类型、运算符等基础概念，能够实现数据类型的转换，结合四则运算体会如何编程。

- 体会现实世界中的事物与计算机的关系
- 理解什么是数据并知道数据的分类
- 理解变量存储数据的“容器”
- 掌握常见运算符的使用，了解优先级关系
- 知道 JavaScript 数据类型隐式转换的特征

## 一、介绍

> 掌握 JavaScript 的引入方式，初步认识 JavaScript 的作用

### 1.1 引入方式

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中，有两种方式：

#### 内部形式

通过 `script` 标签包裹 JavaScript 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 内联形式：通过 script 标签包裹 JavaScript 代码 -->
  <script>
    alert('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

#### 外部形式

一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入

```javascript
// demo.js
document.write('嗨，欢迎来传智播学习前端技术！');
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="demo.js"></script>
</body>
</html>
```

如果 script 标签使用 src 属性引入了某 .js 文件，那么 标签的代码会被忽略！！！如下代码所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="demo.js">
    // 此处的代码会被忽略掉！！！！
  	alert(666);  
  </script>
</body>
</html>
```

#### 内联形式

```html
<body>
 //  内联形式
  <button onclick="alert(666)">惦记我</button>
</body>
</html>
```



### 1.2 注释和结束符

通过注释可以屏蔽代码被执行或者添加备注信息，JavaScript 支持两种形式注释语法：

#### 单行注释

使用 `// ` 注释单行代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    // 这种是单行注释的语法
    // 一次只能注释一行
    // 可以重复注释
    document.write('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

#### 多行注释

使用 `/* */` 注释多行代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    /* 这种的是多行注释的语法 */
    /*
    	更常见的多行注释是这种写法
    	在些可以任意换行
    	多少行都可以
      */
    document.write('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

**注：编辑器中单行注释的快捷键为 `ctrl + /`**

#### 结束符

在 JavaScript 中 `;` 代表一段代码的结束，多数情况下可以省略 `;` 使用回车（enter）替代。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 结束符</title>
</head>
<body>
  
  <script> 
    alert(1);
    alert(2);
    alert(1)
    alert(2)
  </script>
</body>
</html>
```

~~~javascript
let num  = 10
~~~

~~~css
div {
    color: red;
}
~~~

~~~html
<div>
    
</div>
~~~



JavaScript 跟 HTML 和 CSS 一样，会忽略【一些】空白符，但是换行符（回车）会被识别成结束符 `;`，因此在实际开发中有许多人主张书写 JavaScript 代码时省略结束符 `;`

### 1.3 输入和输出

输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程。

举例说明：如按键盘上的方向键，向上/下键可以滚动页面，按向上/下键这个动作叫作输入，页面发生了滚动了这便叫输出。

#### 输出

JavaScript 可以接收用户的输入，然后再将输入的结果输出：

`alert()`、`document.wirte()`

以数字为例，向 `alert()` 或 `document.write()`输入任意数字，他都会以弹窗形式展示（输出）给用户。

 `console.log` 控制台输出

#### 输入

向 `prompt()` 输入任意内容会以弹窗形式出现在浏览器中，一般提示用户输入一些内容。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 输入输出</title>
</head>
<body>
  
  <script> 
    // 1. 输入的任意数字，都会以弹窗形式展示
    document.write('要输出的内容');
    alert('要输出的内容');

    // 2. 以弹窗形式提示用户输入姓名，注意这里的文字使用英文的引号
    prompt('请输入您的姓名:');
  </script>
</body>
</html>
```

## 二、变量

> 理解变量是计算机存储数据的“容器”，掌握变量的声明方式

变量是计算机中用来存储数据的“容器”，它可以让计算机变得有记忆，通俗的理解变量就是使用【某个符号】来代表【某个具体的数值】（数据）

```html
<script>
  // x 符号代表了 5 这个数值
  x = 5;
  // y 符号代表了 6 这个数值
  y = 6;
    
  //举例： 在 JavaScript 中使用变量可以将某个数据（数值）记录下来！

  // 将用户输入的内容保存在 num 这个变量（容器）中
  num = prompt('请输入一数字!');

  // 通过 num 变量（容器）将用户输入的内容输出出来
  alert(num);
  document.write(num);
</script>
```

### 2.1 声明和赋值

#### 声明

声明(定义)变量有两部分构成：声明关键字、变量名（标识）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 声明和赋值</title>
</head>
<body>
  
  <script> 
    // let 变量名
    // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）
    // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语
    // age 即变量的名称，也叫标识符
    let age;
  </script>
</body>
</html>
```

关键字是 JavaScript 中内置的一些英文词汇（单词或缩写），它们代表某些特定的含义，如 `let` 的含义是声明变量的，看到 `let`  后就可想到这行代码的意思是在声明变量，如 `let age;` 

`let` 和 `var` 都是 JavaScript 中的声明变量的关键字，推荐使用 `let` 声明变量！！！

#### 赋值

声明（定义）变量相当于创造了一个空的“容器”，通过赋值向这个容器中添加数据。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 声明和赋值</title>
</head>
<body>
  
  <script> 
    // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）
    // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语
    // age 即变量的名称，也叫标识符
    let age;
    // 赋值，将 18 这个数据存入了 age 这个“容器”中
    age = 18;
    // 这样 age 的值就成了 18
    document.write(age);
    
    // 也可以声明和赋值同时进行
    let str = 'hello world!';
    alert(str);
  </script>
</body>
</html>
```

### 2.2 关键字

JavaScript 使用专门的关键字 `let` 和 `var` 来声明（定义）变量，在使用时需要注意一些细节：

以下是使用 `let` 时的注意事项：

1. 允许声明和赋值同时进行
2. 不允许重复声明
3. 允许同时声明多个变量并赋值
4. JavaScript 中内置的一些关键字不能被当做变量名

以下是使用 `var` 时的注意事项：

2. 允许声明和赋值同时进行
3. 允许重复声明
4. 允许同时声明多个变量并赋值

大部分情况使用 `let` 和 `var` 区别不大，但是 `let` 相较 `var` 更严谨，因此推荐使用 `let`，后期会更进一步介绍二者间的区别。

### 2.3 变量名命名规则

关于变量的名称（标识符）有一系列的规则需要遵守：

1. 只能是字母、数字、下划线、$，且不能能数字开头
2. 字母区分大小写，如 Age 和 age 是不同的变量
3. JavaScript 内部已占用于单词（关键字或保留字）不允许使用
4. 尽量保证变量具有一定的语义，见字知义

注：所谓关键字是指 JavaScript 内部使用的词语，如 `let` 和`var`，保留字是指 JavaScript 内部目前没有使用的词语，但是将来可能会使用词语。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 变量名命名规则</title>
</head>
<body>
  
  <script> 
    let age = 18; // 正确
    let age1 = 18; // 正确
    let _age = 18; // 正确

    // let 1age = 18; // 错误，不可以数字开头
    let $age = 18; // 正确
    let Age = 24; // 正确，它与小写的 age 是不同的变量
    // let let = 18; // 错误，let 是关键字
    let int = 123; // 不推荐，int 是保留字
  </script>
</body>
</html>
```

## 三、数据类型

> 计算机世界中的万事成物都是数据。

**基本数据类型：**

- number 数字型
- string 字符类型
- boolean 布尔型
- undefined 未定义型
- null 空类型

**引用数据类型：**

- object 对象
- function 函数
- array 数组



计算机程序可以处理大量的数据，为了方便数据的管理，将数据分成了不同的类型：

注：通过 typeof 关键字检测数据类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    // 检测 1 是什么类型数据，结果为 number
    document.write(typeof 1);
  </script>
</body>
</html>
```

### 3.1 数值类型

即我们数学中学习到的数字，可以是整数、小数、正数、负数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    let score = 100; // 正整数
    let price = 12.345; // 小数
    let temperature = -40; // 负数

    document.write(typeof score); // 结果为 number
    document.write(typeof price); // 结果为 number
    document.write(typeof temperature); // 结果为 number
  </script>
</body>
</html>
```

JavaScript 中的数值类型与数学中的数字是一样的，分为正数、负数、小数等。

### 3.2 字符串类型

通过单引号（ `''`） 、双引号（ `""`）或反引号包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号。

注意事项：

1. 无论单引号或是双引号必须成对使用
2. 单引号/双引号可以互相嵌套，但是不以自已嵌套自已
3. 必要时可以使用转义符 `\`，输出单引号或双引号

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    let user_name = '小明'; // 使用单引号
    let gender = "男"; // 使用双引号
    let str = '123'; // 看上去是数字，但是用引号包裹了就成了字符串了
    let str1 = ''; // 这种情况叫空字符串
		
    documeent.write(typeof user_name); // 结果为 string
    documeent.write(typeof gender); // 结果为 string
    documeent.write(typeof str); // 结果为 string
  </script>
</body>
</html>
```

#### 3.2.1 模板字符串

作用：

- 拼接字符串和变量

- 在没有它之前，要拼接变量比较麻烦

  ```jsx
  document.write('xxx' + name + ', xxx')
  ```

符号：

- ``

- 在因为输入法模式下按键盘的 tab 键上方那个键

- 内容拼接变量时，用${} 包住变量

  ```jsx
  document.write(`ddd ${name} fdsfdf`)
  ```

  

### 3.3 布尔类型

表示肯定或否定时在计算机中对应的是布尔类型数据，它有两个固定的值 `true` 和 `false`，表示肯定的数据用 `true`，表示否定的数据用 `false`。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    //  pink老师帅不帅？回答 是 或 否
    let isCool = true; // 是的，摔死了！
    isCool = false; // 不，套马杆的汉子！

    document.write(typeof isCool); // 结果为 boolean
  </script>
</body>
</html>
```

### 3.4 undefined

未定义是比较特殊的类型，只有一个值 undefined，只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    // 只声明了变量，并末赋值
    let tmp;
    document.write(typeof tmp); // 结果为 undefined
  </script>
</body>
</html>
```

**注：JavaScript 中变量的值决定了变量的数据类型。**



#### 通过 typeof 关键字检测数据类型

```
typeof age
typeof uname
typeof bug
```



## 四、类型转换

> 理解弱类型语言的特征，掌握显式类型转换的方法

在 JavaScript 中数据被分成了不同的类型，如数值、字符串、布尔值、undefined，在实际编程的过程中，不同数据类型之间存在着转换的关系。

### 4.1 隐式转换

某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 隐式转换</title>
</head>
<body>
  <script> 
    let num = 13; // 数值
    let num2 = '2'; // 字符串

    // 结果为 132
    // 原因是将数值 num 转换成了字符串，相当于 '13'
    // 然后 + 将两个字符串拼接到了一起
    console.log(num + num2);

    // 结果为 11
    // 原因是将字符串 num2 转换成了数值，相当于 2
    // 然后数值 13 减去 数值 2
    console.log(num - num2);

    let a = prompt('请输入一个数字');
    let b = prompt('请再输入一个数字');

    alert(a + b);
  </script>
</body>
</html>
```

注：数据类型的隐式转换是 JavaScript 的特征，后续学习中还会遇到，目前先需要理解什么是隐式转换。

补充介绍模板字符串的拼接的使用

```jsx
console.log(10-'10')
console.log(10 * '10')
console.log(10 / '10')
以上情况，- * / 会把字符串隐式转换成数字型 10
```

### 4.2显式转换

编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。

#### Number

通过 `Number` 显示转换成数值类型，当转换失败时结果为 `NaN`（Not a Number）即不是一个数字。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 隐式转换</title>
</head>
<body>
  <script>
    let t = '12';
    let f = 8;

    // 显式将字符串 12 转换成数值 12
    t = Number(t);

    // 检测转换后的类型
    // console.log(typeof t);
    console.log(t + f); // 结果为 20

    // 并不是所有的值都可以被转成数值类型
    let str = 'hello';
    // 将 hello 转成数值是不现实的，当无法转换成
    // 数值时，得到的结果为 NaN （Not a Number）
    console.log(Number(str));
  </script>
</body>
</html>
```

记忆单词案例

思路：

- 外层xxx
- 里层xxx

~~~javascript
// 记忆单词案例
        // 分析
        // 1. 外面的循环 记录第n天 
        for (let i = 1; i < 4; i++) {
            document.write(`第${i}天 <br>`)
            // 2. 里层的循环记录 几个单词
            for (let j = 1; j < 6; j++) {
                document.write(`记住第${j}个单词<br>`)
            }
        }
~~~

#### string

- string()
- toString



## 五、运算符及数组操作

- == 只要值一样，不判断类型
- === 判断值和类型，要求值和类型完全一样
- !== 值和类型不相等

字符串也可以进行比较，比较的是 ASCII

### 5.1 数组：增删

- 添加数据：push、unshift

  - arr.push(新的内容)：添加数据到数组的末尾
  - arr.unshift(新的内容)：添加元素到数组的开头

- 删除数据：pop、shift、splice

  - arr.pop()：删除数组末尾的元素，并返回元素的值
  - arr.shift()：删除数组开头的元素，并返回元素的值
  - arr.splice(操作的是下标，删除的个数)：删除指定下标的元素，并返回元素的值。例如：arr.splice(1, 1);

  

## 六、对象

可以理解成 map，或者 iOS 中的字典

**声明语法**：

```
let 对象名 = {}

例如：
let person = {}

let 对象名 = {
		属性名：属性值，
		方法名：函数
}

let  person = {
		name: 'andy',
		sayHi: function() {
				document.write('hi')
		}
}

person.sayHi()

```

**增加属性**

```jsx
let person = {
  	name: 'andy',
  	age: 18,
}

person.hobby = '足球'
person['sex'] = '男'
```

**查询对象**

```jsx
let obj = {
  	name: 'andy',
  	age: 18,
  	sex: '男'
}

let uname = obj['name']
```

**重新赋值**

```jsx
let obj = {
  	name: 'andy',
  	age: 18,
  	sex: '男'
}

obj['name'] = 'lisi'
```

**删除对象中的属性**

```jsx
let obj = {
     name: 'lisi',
     age: 18,
     sex: 'men'
}
// 返回的是删除状态
let status  = delete obj.name
document.write(status)
```

**遍历对象**

```jsx
let obj = {
  	name: 'andy',
  	age: 18,
  	sex: '男'
}

for let k in obj {
  	console.log(k) // 打印属性名
  	console.log(obj[k]) // 打印属性值
}
```

### 6.1 内置对象

#### 6.1.1 内置对象：math

- math 对象是 js 提供的一个“数字高手”对象
- 提供了一系列做数学运算的方法
- 方法有：
  - random：生成 0-1 之间是随机数，包含 0，不包含 1
  - ceil：向上取整
  - floor：向下取整
  - max：找最大数
  - min：找最小数
  - pow：幂运算
  - abs：绝对值
  - [Math对象在线文档](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)

**生成任意范围的随机数**

- 0 ~ 10 的随机数：`Math.floor(Math.random() *(10 + 1))`
- 5 ~ 10 的随机数：`Math.floor(Math.random() *(5 + 1)) + 5`
- N ~ M 的随机数：`Math.floor(Math.random() *(M - N + 1)) + N`



## 其他知识

### 引入图片

js 中一般加载的都是网络图

css 可以直接使用图片地址

如果 js 需要使用本地图片，需要先导入，在使用

```js
import imgObj from './assets/1.gif'

<img :src="imgObj">
```

