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



