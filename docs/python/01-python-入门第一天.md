---
id: python入门第一天
title: 01 | python 入门第一天
---



## 一、 Python 核心数据类型

### 01 | 元组

- tuple 与 list 类似，不同之处在于 tuple 的元素不能修改。tuple写在小括号里，元素之间用逗号隔开

- 元组的元素不可变，但是可以包含可变的对象，如 list

- 注意：定义一个只有一个元素的 tuple，必须用逗号隔开

- ```python
  t = (1,2,3,4,'5')
  t1 = (1,)
  t2 = (1，[1,3,'3'])
  t2[1][1] = 2



**增加：**

可以通过两个元组之间连接，变相的增加

```
tup = (1,2,3)
tup1 = ('abc','xyc')
tup2 = tup + tup1
```

> 本质是重新开辟一个内存空间，去存储 tup2，tup和 tup1 的内容不会改



**删除:**

`del tup`：删除的是整个元组对象



**修改：**

元组不允许修改。但是如果包含的对象是可变的话，可以修改可变对象。



**查看：**

可以和数组一样，使用下标来访问

```
tup = (1,2,3,[2,'2'])
print(tup[0])

tup[-1] # 访问最后一个元素
tup[0:3] # 获取区间切片，左闭右开
```



**常见操作：**

| 操作名称         | 操作方法       | 举例              |
| ---------------- | -------------- | ----------------- |
| 访问元组中的元素 | 通过下直接访问 | tup[1]            |
| 遍历元组         | 通过 for 循环  | for i in tup:     |
| 元组的切片       | 使用 `[: :]`   | tup[1:4:2]        |
| 元组的加法操作   | +              | Tup2 = tup + tup1 |
| 元组成员关系     | in             | 2 in list1        |
| 得到重复元素数量 | count          | tup.count(1)      |

其他和数组一样的方法：

| 操作名称               | 操作方法 | 举例         |
| ---------------------- | -------- | ------------ |
| 元组成员关系           | in       | 2 in list1   |
| 得到重复元素数量       | count    | tup.count(1) |
| 获取元组长度           | len()    |              |
| 获取元组元素最大值     | max()    |              |
| 获取元组元素最小值     | min()    |              |
| 其他类型对象转换成元组 | tuple()  |              |



### 02 | 字段：Dict

- 字典是无序的对象集合，使用键值存储，具有极快的查找速度
- 键：必须使用不可变类型
- 同一个字典中，键是唯一的

```
dict = {'name': 'zhangsan', "age": 15}
```

可以通过键访问：

`dict["name"]`

如果访问了不存在的键，直接访问会报错。可以通过 get 方法，如果是不存在的键，会返回 None

`dict.get("name")`：如果 name 不存在，返回 None

通过 get 没找到可以设置默认值。

```
dict.get("name","默认值")
```

**增：**

```python
info = {}
info["id"] = 1
info["name"] = "战三"
info["age"] = 18
```



**删：**

```python
info = {"id": 1, "name": '张三', "age": 16}
# 删除 name 对应的键值，删除后不能再通过 info["name"] 去访问
del info["name"]

# 删除的是整个字段
del info

# 如果想清空，字段变成空的了，还是存在
info.clear()

```



**改：**

```js
info = {"id": 1, "name": '张三', "age": 16}
info["name"] = "李四"
```



**查：**

- `info:keys()`：获取所有的键，是一个列表
- `info.values()`：获取所有的值，是一个列表
- `info.items()`：获取所有的项，是一个列表，每一个 item 是一个元组

- 遍历所有的值

  ```python
  # 遍历所有的键
  for ke in info.keys():
    print(key)
    print(info[key])
    
  # 遍历所有的值
  for value in info.values():
    print(value)
    
  # 遍历所有的项
  for key, value in info.items():
    print(key)
    print(value)
  ```



### 03 | 函数 enumerate：枚举

**数组使用：**

```python
list = [1,2,3,4,5,6]
for i, x in emumerate(list):
	print("下标：%d，对应的值：%d"%(i, x))
```



### 04 | 字符串

字符串是 Python 中最常用的数据类型。我们可以使用引号 ( **'** 或 **"** ) 来创建字符串。

```python
str = 'Hello World'
str2 = 'Python'
```

#### 04-01 | **访问字符串：**

Python 不支持单字符类型，单字符在 Python 中也是作为一个字符串使用。

Python 访问子字符串，可以使用方括号来截取字符串，如下实例：

```python
str = 'Hello World'
str2 = 'Python'
print "var1[0]: ", var1[0]
print "var2[1:5]: ", var2[1:5]
```

以上实例执行结果:

```python
var1[0]:  H
var2[1:5]:  ytho
```

#### 04-02 | **字符串连接：**

我们可以对字符串进行截取并与其他字符串进行连接，如下实例：

```python
var1 = 'Hello World!'
 
print "输出 :- ", var1[:6] + 'Runoob!'

// 输出 :-  Hello Runoob!
```

#### 04-03 | **字符串运算符:**

| 操作符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| +      | 字符串拼接                                                   |
| *      | 重复输出字符串                                               |
| []     | 通过索引获取字符串中字符                                     |
| [:]    | 截取字符串中的一部分                                         |
| in     | 成员运算符，如果字符串中包含给定的字符返回 True              |
| not in | 成员运算符，如果字符串中不包含给定的字符返回 True            |
| R/r    | 原始字符串 - 原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符。 原始字符串除在字符串的第一个引号前加上字母"r"（可以大小写）以外，与普通字符串有着几乎完全相同的语法。 |
| %      | 格式字符串                                                   |

具体实例：

- +：

  ```python
  str = 'a' + 'b'
  str = 'ab'
  ```

- *:

  ```python
  str = 'a' * 10
  str = 'aaaaaaaaa'
  ```

- []:

  ```python
  str = '123456'
  str[1]   # 1
  str[2]   # 12
  str[5]   # 12345
  ```

- [:]

  ```python
  str = '123456789'
  str[:2]  # 12
  str[1:2] # 2
  str[1:6] # 23456
  ```

- in:

  ```python
  str = '12345'
  if '123' in str:
    print('在')
  ```

- not in：

  ```python
  str = '123456'
  if 'afd' not in str:
    print('不在')
  ```

- r、R：原始字符串，可以忽略转义字符

  ```python
  # 正常遇到转义字符
  str = '\\d'
  str1 = '//'
  
  # 使用 r、R 之后
  str = r'\d'
  str1 = r'/'
  ```



#### 04-04 | **字符串格式化:**

Python 支持格式化字符串的输出 。尽管这样可能会用到非常复杂的表达式，但最基本的用法是将一个值插入到一个有字符串格式符 %s 

的字符串中。

在 Python 中，字符串格式化使用与 C 中 sprintf 函数一样的语法。

| 符  号 | 描述                                 |
| :----- | :----------------------------------- |
| %c     | 格式化字符及其ASCII码                |
| %s     | 格式化字符串                         |
| %d     | 格式化整数                           |
| %u     | 格式化无符号整型                     |
| %o     | 格式化无符号八进制数                 |
| %x     | 格式化无符号十六进制数               |
| %X     | 格式化无符号十六进制数（大写）       |
| %f     | 格式化浮点数字，可指定小数点后的精度 |
| %e     | 用科学计数法格式化浮点数             |
| %E     | 作用同%e，用科学计数法格式化浮点数   |
| %g     | %f和%e的简写                         |
| %G     | %F 和 %E 的简写                      |
| %p     | 用十六进制数格式化变量的地址         |



#### 04-05 | 三引号

Python 中三引号可以将复杂的字符串进行赋值。

Python 三引号允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符。

三引号的语法是一对连续的单引号或者双引号（通常都是成对的用）。

```py
str = '''
	字符串内容
'''
```

三引号让程序员从引号和特殊字符串的泥潭里面解脱出来，自始至终保持一小块字符串的格式是所谓的WYSIWYG（所见即所得）格的。

一个典型的用例是，当你需要一块HTML或者SQL时，这时当用三引号标记，使用传统的转义字符体系将十分费神。

```python
errHTML = '''
<HTML><HEAD><TITLE>
Friends CGI Demo</TITLE></HEAD>
<BODY><H3>ERROR</H3>
<B>%s</B><P>
<FORM><INPUT TYPE=button VALUE=Back
ONCLICK="window.history.back()"></FORM>
</BODY></HTML>'''
```



#### 04-06 | Unicode 字符串

Python 中定义一个 Unicode 字符串和定义一个普通字符串一样简单：

```python
u'Hello World !'
```

引号前小写的"u"表示这里创建的是一个 Unicode 字符串。如果你想加入一个特殊字符，可以使用 Python 的 Unicode-Escape 编码。如

下例所示：

```python
>>> u'Hello\u0020World !'
u'Hello World !'
```



#### 04-07 | 字符串内建函数

字符串方法是从 python1.6到2.0慢慢加进来的——它们也被加到了Jython中。

这些方法实现了string模块的大部分方法，如下表所示列出了目前字符串内建支持的方法，所有的方法都包含了对Unicode的支持，有一

些甚至是专门用于Unicode的。

| **方法**                                                     | **描述**                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [string.capitalize()](https://www.runoob.com/python/att-string-capitalize.html) | 把字符串的第一个字符大写                                     |
| [string.center(width)](https://www.runoob.com/python/att-string-center.html) | 返回一个原字符串居中,并使用空格填充至长度 width 的新字符串   |
| **[string.count(str, beg=0, end=len(string))](https://www.runoob.com/python/att-string-count.html)** | 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数 |
| [string.decode(encoding='UTF-8', errors='strict')](https://www.runoob.com/python/att-string-decode.html) | 以 encoding 指定的编码格式解码 string，如果出错默认报一个 ValueError 的 异 常 ， 除非 errors 指 定 的 是 'ignore' 或 者'replace' |
| [string.encode(encoding='UTF-8', errors='strict')](https://www.runoob.com/python/att-string-encode.html) | 以 encoding 指定的编码格式编码 string，如果出错默认报一个ValueError 的异常，除非 errors 指定的是'ignore'或者'replace' |
| **[string.endswith(obj, beg=0, end=len(string))](https://www.runoob.com/python/att-string-endswith.html)** | 检查字符串是否以 obj 结束，如果beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True,否则返回 False. |
| [string.expandtabs(tabsize=8)](https://www.runoob.com/python/att-string-expandtabs.html) | 把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 8。 |
| **[string.find(str, beg=0, end=len(string))](https://www.runoob.com/python/att-string-find.html)** | 检测 str 是否包含在 string 中，如果 beg 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回-1 |
| **[string.format()](https://www.runoob.com/python/att-string-format.html)** | 格式化字符串                                                 |
| **[string.index(str, beg=0, end=len(string))](https://www.runoob.com/python/att-string-index.html)** | 跟find()方法一样，只不过如果str不在 string中会报一个异常.    |
| [string.isalnum()](https://www.runoob.com/python/att-string-isalnum.html) | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True,否则返回 False |
| [string.isalpha()](https://www.runoob.com/python/att-string-isalpha.html) | 如果 string 至少有一个字符并且所有字符都是字母则返回 True,否则返回 False |
| [string.isdecimal()](https://www.runoob.com/python/att-string-isdecimal.html) | 如果 string 只包含十进制数字则返回 True 否则返回 False.      |
| [string.isdigit()](https://www.runoob.com/python/att-string-isdigit.html) | 如果 string 只包含数字则返回 True 否则返回 False.            |
| [string.islower()](https://www.runoob.com/python/att-string-islower.html) | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False |
| [string.isnumeric()](https://www.runoob.com/python/att-string-isnumeric.html) | 如果 string 中只包含数字字符，则返回 True，否则返回 False    |
| [string.isspace()](https://www.runoob.com/python/att-string-isspace.html) | 如果 string 中只包含空格，则返回 True，否则返回 False.       |
| [string.istitle()](https://www.runoob.com/python/att-string-istitle.html) | 如果 string 是标题化的(见 title())则返回 True，否则返回 False |
| [string.isupper()](https://www.runoob.com/python/att-string-isupper.html) | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True，否则返回 False |
| **[string.join(seq)](https://www.runoob.com/python/att-string-join.html)** | 以 string 作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串 |
| [string.ljust(width)](https://www.runoob.com/python/att-string-ljust.html) | 返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串 |
| [string.lower()](https://www.runoob.com/python/att-string-lower.html) | 转换 string 中所有大写字符为小写.                            |
| [string.lstrip()](https://www.runoob.com/python/att-string-lstrip.html) | 截掉 string 左边的空格                                       |
| [string.maketrans(intab, outtab)](https://www.runoob.com/python/att-string-maketrans.html) | maketrans() 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。 |
| [max(str)](https://www.runoob.com/python/att-string-max.html) | 返回字符串 *str* 中最大的字母。                              |
| [min(str)](https://www.runoob.com/python/att-string-min.html) | 返回字符串 *str* 中最小的字母。                              |
| **[string.partition(str)](https://www.runoob.com/python/att-string-partition.html)** | 有点像 find()和 split()的结合体,从 str 出现的第一个位置起,把 字 符 串 string 分 成 一 个 3 元 素 的 元 组 (string_pre_str,str,string_post_str),如果 string 中不包含str 则 string_pre_str == string. |
| **[string.replace(str1, str2, num=string.count(str1))](https://www.runoob.com/python/att-string-replace.html)** | 把 string 中的 str1 替换成 str2,如果 num 指定，则替换不超过 num 次. |
| [string.rfind(str, beg=0,end=len(string) )](https://www.runoob.com/python/att-string-rfind.html) | 类似于 find() 函数，返回字符串最后一次出现的位置，如果没有匹配项则返回 -1。 |
| [string.rindex( str, beg=0,end=len(string))](https://www.runoob.com/python/att-string-rindex.html) | 类似于 index()，不过是返回最后一个匹配到的子字符串的索引号。 |
| [string.rjust(width)](https://www.runoob.com/python/att-string-rjust.html) | 返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串 |
| [string.rpartition(str)](https://www.runoob.com/python/att-string-rpartition.html) | 类似于 partition()函数,不过是从右边开始查找                  |
| [string.rstrip()](https://www.runoob.com/python/att-string-rstrip.html) | 删除 string 字符串末尾的空格.                                |
| **[string.split(str="", num=string.count(str))](https://www.runoob.com/python/att-string-split.html)** | 以 str 为分隔符切片 string，如果 num 有指定值，则仅分隔 **num+1** 个子字符串 |
| [string.splitlines([keepends\])](https://www.runoob.com/python/att-string-splitlines.html) | 按照行('\r', '\r\n', '\n')分隔，返回一个包含各行作为元素的列表，如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。 |
| [string.startswith(obj, beg=0,end=len(string))](https://www.runoob.com/python/att-string-startswith.html) | 检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果beg 和 end 指定值，则在指定范围内检查. |
| **[string.strip([obj\])](https://www.runoob.com/python/att-string-strip.html)** | 在 string 上执行 lstrip()和 rstrip()                         |
| [string.swapcase()](https://www.runoob.com/python/att-string-swapcase.html) | 翻转 string 中的大小写                                       |
| [string.title()](https://www.runoob.com/python/att-string-title.html) | 返回"标题化"的 string,就是说所有单词都是以大写开始，其余字母均为小写(见 istitle()) |
| **[string.translate(str, del="")](https://www.runoob.com/python/att-string-translate.html)** | 根据 str 给出的表(包含 256 个字符)转换 string 的字符,要过滤掉的字符放到 del 参数中 |
| [string.upper()](https://www.runoob.com/python/att-string-upper.html) | 转换 string 中的小写字母为大写                               |
| [string.zfill(width)](https://www.runoob.com/python/att-string-zfill.html) | 返回长度为 width 的字符串，原字符串 string 右对齐，前面填充0 |

### 小结：

|        | 是否有序 | 是否可变类型           |
| ------ | -------- | ---------------------- |
| 列表[] | 有序     | 可变类型               |
| 元组() | 有序     | 不可变类型             |
| 字段{} | 无序     | key 不可变，value 可变 |
| 集合{} | 无序     | 可变类型，不重复       |



## 二、 函数

### 01 | 函数的定义和调用

定义函数：

```python
def 函数名():
  代码
```

示例：

```python
def printInfo():
	print(1111111111)
```

**带参数的函数：**

```python
def addNum(a, b):
  c = a + b
  print(c)
 
addNum(1,3)

```



**带返回值的函数：**

```python
def addNum(a, b):
  return a + b 
result = addNum(1,3)
```

通过 return 返回结果



**返回多个值的函数：**

```python
def divid(a, b):
  shange = a // b
  yushu = a % b
  return shang, yushu
```

返回了多个数据，接收如下：

```js
sh, yu = divid(5,2)
```



**全局变量和局部变量：**

```python
a = 100
def test1():
  a = 200  # 局部变量优先使用
  print("修改前： a=%d"%a)
  a = 150
  print("修改后： a=%d"%a)
test1()

print(a) # 此时 a 还是 100，在函数中并没有修改全局变量 a，而是对函数内局部变量 a 进行操作
```

如果想在函数内使用全局变量：

```python
# 在函数中修改全局变量
a = 100
def test1():
  global a # 全局变量在函数中的标识符
  print("修改前： a=%d"%a)
  a = 150  # 此时修改的是全局变量 a
  print("修改后： a=%d"%a)
  
```



## 三、文件操作

### 01 | 文件的打开和关闭

- 使用 open 函数，可以打开一个已经存在的文件，或者创建一个新文件
  - `open(文件名, 访问模式)`
- 使用 close，关闭文件



示例：

```js
f = open('text.txt', 'w')
```

**访问模式说明：**

| 访问模式 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| `r`      | 以只读的方式打开文件。文件的指针将会放在文件的开头。这是默认模式 |
| `w`      | 打开一个文件只用于写入。如果该文件存在则将其覆盖。如果该文件不存在，创建新文件 |
| a        | 打开一个文件用于追加。如果该文件存在，文件指针将会放在文件的末尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入 |
| `rb`     | 以二进制格式打开一个文件用于只读。文件指针将放在文件的开头。这是默认模式 |
| `wb`     | 以二进制格式打开一个文件只用于写入。如果该文件已存在将其覆盖。如果该文件不存在，创建新文件 |
| ab       | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的末尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入 |
| r+       | 打开一个文件用于读写。文件指针将会放在文件的开头             |
| w+       | 打开一个文件用于读写。如果该文件已存在将其覆盖。如果该文件不存在，创建新闻加你 |
| a+       | 打开一个文件用于读写。如果该文件已经存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| rb+      | 以二进制的形式打开一个文件用于读写。文件指针将会放在文件的开头 |

**w：**

```python
f = open('11.txt','w')
# 将字符串写入文件
f.write("Hello,world")
f.close()
```

**r:**

```python
f = open('11.txt','r')
# 从开头开始，读 5 个字符
content = f.read(5)
# 此时是从第六个字符开始读
content = f.read(5)
f.close()
```

```python
f = open('11.txt','r')
# 读取整个文档形成一个列表
f.readLines()

f.close()
```

更多文件方法看文档

- readLine()：读一行
- readLines()：读所有的内容



### 02 | 文件的相关操作

有些时候，需要对文件进行重命名、删除等一些操作，python 的 os 模块中都有这些功能

**文件重命名：**

os 模块中的 rename() 可以完成对文件的重命名操作

`rename(需要修改的文件名, 新的文件名)`

```python
import os
os.rename("111.txt", "222.txt")
```

**删除文件**

os 模块中的 remove() 可以完成对文件的删除操作

`remove(待删除的文件名)`

```python
import os
os.remove('11.txt')
```



**创建文件夹：**

```python
import os
os.mkdir(文件夹名)
```



**获取当前目录：**

```python
import os
os.getcwd()
```



**更改默认目录：**

```python
import os
os.chdir('../')
```



**获取目录列表：**

```python
import os
os.listdir('./')
```



**删除文件夹：**

```js
import os
os.rmdir(文件名)
```



### 03 | 异常与文件操作：try...finally

在文件操作时，经常与 `try...finally` 嵌套使用

```python
try:
  f = open('11.txt', 'r')
except Exception as Err:
  ..
finally:
  f.close()
```

```python
try:
  f = open('11.txt', 'r')
  try:
    while True:
      content = f.readline()
      if len(content) == 0:
        break
      time.sleep(2)
      print(content)
  finally:
    f.close()
    print("文件关闭")
 
except Exception as Err:
  print("发生异常")
```



## 四、错误与异常

类似于其他语言中的`try...catch`

python 的是：`try...excep`t

```python
try:
  f = open('222.txt')
  value = f.read()
  print(value)
except IOError:
  print("产生错误了")
```

尝试从文件中读取数据，如果文件不存在，或者读取失败，会进 except.

`IOError`：是要捕获的类型。

需要捕获多个异常，可以用小括号和逗号隔开。

```python
try:
  f = open('222.txt')
  value = f.read()
  print(value)
except (NameError, IOError):# 将可能产生错误的异常类型，都放在这里的括号中
  print("产生错误了")
```



**捕捉到的错误原因：**

```python
try:
  f = open('222.txt')
  value = f.read()
  print(value)
except (NameError, IOError) as error:# 将可能产生错误的异常类型，都放在这里的括号中
  print("产生错误了")
  print(error) # 错误的原因
```

可以利用 as 来添加错误原因



**捕获所有的异常：**

```js
try:
	...
except Exception as error:
	....
```

可以利用 `Exception` 捕获所有的异常



## 五、进程和线程

### 01 | 多进程使用

####  1.1 - 导入进程包

```
# 导入进程包
import multiprocessing
```

#### 1.2 - Process 进程类的说明

**Process([group [, target [,name [, arges [, kwargs]]]]])**

- group：指定进程，目前只能使用 none
- target：执行的目标任务名
- name：进程名字
- args：以元祖的方式给执行任务传参
- kwargs：以字典的方式给执行任务传参

**Process 创建的实例对象的常用方法：**

- start：启动子进程实例(创建子进程)
- join()：等待子进程执行结束
- `terminate()`：不管任务是否完成，立即终止子进程

**Process 创建的实例对象的常用属性：**

- name：当前进程的别名，默认 Process-N，N 为从 1 开始递增的整数

#### 1.3 - 实例

```python
# 1. 导入进程包
import multiprocessing
from multiprocessing import Process
import time
# 跳舞任务
def dance():
    for i in range(10):
        print("跳舞中")
        time.sleep(.5)

def sing():
    for i in range(10):
        print("唱歌中")
        time.sleep(.5)

# 2. 创建子进程 ( 自己创建的进程是子进程,在 __init__.py 中已经导入了 Process 类
# 1. group: 进程组,目前只能使用 none,一般不需要设置
# 2. target: 执行进程的具体目标,一般是个函数
# 3. name: 进程名,如果不设置,默认 Process-1,.........
dance_proce = multiprocessing.Process(target=dance)
sing_process = multiprocessing.Process(target=sing)

# 3. 启动进程执行对应的任务
# dance_proce.start()
# 主进程执行
# sing()
if __name__ == "__main__":
    dance_proce.start()
    sing_process.start()

```



### 02 | 获取进程编号

#### 2.1 - 获取进程编号的目的

获取进程编号的目的是验证主进程和子进程的关系，可以得知子进程是由哪个主进程创建的

获取进程编号的两种操作

- 获取当前进程编号
- 获取当前父进程编号



#### 2.2 获取当前进程编号

`os.getpid()` ：获取当前进程的编号

```python
# 1. 导入进程包
import multiprocessing
import time
import os

# 跳舞任务
def dance():
    print("开始跳舞")
    process_id = os.getpid()
    ...

def sing():
    print("开始唱歌")
    process_id = os.getpid()
    print(process_id, multiprocessing.current_process())
    ...

# 2. 创建子进程 ( 自己创建的进程是子进程,在 __init__.py 中已经导入了 Process 类
# 1. group: 进程组,目前只能使用 none,一般不需要设置
# 2. target: 执行进程的具体目标,一般是个函数
# 3. name: 进程名,如果不设置,默认 Process-1,.........
dance_proce = multiprocessing.Process(target=dance, name="dance_process")
sing_process = multiprocessing.Process(target=sing)

# 3. 启动进程执行对应的任务
# dance_proce.start()
# 主进程执行
# sing()
if __name__ == "__main__":
    dance_proce.start()
    sing_process.start()
   
```



#### 2.3 获取当前父进程编号

`os.getppid()`：获取当前父进程编号

```python
# 1. 导入进程包
import multiprocessing
import time
import os

# 跳舞任务
def dance():
    print("开始跳舞")
    process_id = os.getpid()
    print(process_id, multiprocessing.current_process())
    parent_id = os.getppid()
    print("父进程:", parent_id)
    ...

def sing():
    print("开始唱歌")
    process_id = os.getpid()
    print(process_id, multiprocessing.current_process())
    parent_id = os.getppid()
    print("父进程:", parent_id)
    ...
...
dance_proce = multiprocessing.Process(target=dance, name="dance_process")
sing_process = multiprocessing.Process(target=sing)

# 3. 启动进程执行对应的任务
# dance_proce.start()
# 主进程执行
# sing()
if __name__ == "__main__":
    print("主进程:", os.getpid())
    dance_proce.start()
    sing_process.start()
 
```

> 主动杀死进程
>
> os.kill()



### 03 | 进程执行带有参数的任务

#### 3.1 进程执行带有参数的任务介绍

Process 类执行任务并给任务传参有 2 中方式

- args 表示以元祖的方式给执行任务传参
- kwargs 表示以字典的方式给执行任务传参



#### 3.2 args 参数的使用

```python
import multiprocessing

def say(name):
    print( name)

if __name__ == "__main__":
    # 元素顺序要和函数的参数顺序保持一致
    # 元祖只有一个参数时，要加一个，
    sub_process = multiprocessing.Process(target=say, args=("李四",))
    sub_process.start()
```



#### 3.3 kwargs 参数的使用

```` python
def say(name):
    print( name)



if __name__ == "__main__":
    # 元素顺序要和函数的参数顺序保持一致
    sub_process = multiprocessing.Process(target=say, kwargs={"name":'zs'})
    sub_process.start()

````



### 04 | 线程的使用

#### 4.1 导入线程模块

```python
import threading
```



#### 4.2 线程类 Thread 参数的说明

**Thread ([group [, target [,name [, arges [, kwargs]]]]])**

- group：线程组，目前只能使用 none
- target：执行的目标任务名
- name：线程名字，一般不用设置
- args：以元祖的方式给执行任务传参
- kwargs：以字典的方式给执行任务传参



#### 4.3 线程方法

- 启动线程使用 start 方法
- 获取当前线程：threading.current_thread()
  - 如果是主线程会返回 `MainThread `
  - 如果是子线程会返回 `Thread-x`
- join()：等待上面任务执行完毕，在往下执行
- 传参规则与进程一样，这里不做说明



#### 4.4 多线程完成多任务的代码

```python
# 1. 导入线程模块
import threading
import time

def sing():
    for i in range(10):
        print("我在唱歌")
        time.sleep(0.5)

def dance():
    for i in range(10):
        print("我在跳舞")
        time.sleep(0.5)


if __name__ == "__main__":
    # 2. 创建子线程
    sing_thread = threading.Thread(target=sing)
    dance_thread = threading.Thread(target=dance)

    # 3. 启动子线程执行对应的任务
    sing_thread.start()
    dance_thread.start()
```



#### 4.5 join

与进程中的 join 一样

```python
import threading
import time

list = []

def add_item():
  for i in range(10):
    list.append(i)
    time.sleep(1)

def read_list():
  print(list)
  
if __name__ == "__main__":
  # 创建子线程，并绑定方法 add_item
  add_thread = threading.Thread(target=add_item)
  # 创建子线程，并绑定方法 read_list
  read_thread= threading.Thread(target=read_list)
  # 开启子线程任务
  add_thread.start()
  # 由于当前子线程调用了 join 方法，所以主线程会等当前子线程执行完毕之后，在执行下面的任务
  sub_add_thread.join()
  read__thread.start()
```



### 05 | 线程的注意点

- 线程之间执行是无序的
- 主线程会等待所有的子线程执行结束在结束
- 线程之间共享全局变量
- 线程之间共享全局变量有可能出现数据问题



### 06 | 互斥锁

互斥锁对共享数据锁定，保证同一时刻只有一个线程去操作

注意：

互斥锁是多个线程一起去抢，抢到锁的线程先执行，没有抢到锁的线程需要等待，等互斥锁使用完毕释放后，其他等待的线程再去抢这个锁



#### 6.1 互斥锁的使用

threading 模块中定义了 Lock 变量，这个变量本质上是一个函数，通过调用这个函数可以获得一把互斥锁

```python
# 创建锁
mutex = threading.lock()

# 上锁
mutex.acquire()

# 释放锁
mutex.release()
```

注意点：

- acquire 和 release 方法之间的的代码在同一时刻只能有一个线程去啊哦做
- 如果在调用 acquire 方法的时候，其他线程已经使用了这个互斥锁，那么此事 acquire 方法会堵塞，直到这个互斥锁释放后才能再次上锁
- 线程等待和互斥锁都是把多任务改成单任务去执行，保证 数据的准确性，但是执行的效率会降低





