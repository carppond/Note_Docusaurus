---
id: mongodb
title: 05 | mongodb
---



## Mongodb的介绍和安装

mongodb的官方文档：https://docs.mongodb.com/manual/introduction/

### 01 | mongodb的介绍

> https://www.cnblogs.com/jeakeven/p/5402095.html

- mongodb 是一个功能最丰富的NoSQL非关系数据库。由 C++ 语言编写。
- mongodb 本身提供S端存储数据，即server；也提供C端操作处理（如查询等）数据，即client。

**SQL和NoSQL的主要区别**

- 在SQL中层级关系： 数据库>表>数据
- 而在NoSQL中则是： 数据库>集合>文档

**数据之间无关联性:**

- SQL中如何需要增加外部关联数据的话，规范化做法是在原表中增加一个外键，关联外部数据表。
- NoSQL则可以把外部数据直接放到原数据集中，以提高查询效率。缺点也比较明显，对关联数据做更新时会
- 比较麻烦。
- SQL中在一个表中的每条数据的字段是固定的。而NoSQL中的一个集合(表)中的每条文档(数据)的key(字段)可
- 以是互不相同的。

**mongodb作为非关系型数据库相较于关系型数据库的优势:**

- 易扩展： NoSQL数据库种类繁多， 但是一个共同的特点都是去掉关系数据库的关系型特性。 数据之间无关

  系， 这样就非常容易扩展

- 大数据量，高性能： NoSQL数据库都具有非常高的读写性能， 尤其在大数据量下表现优秀。 这得益于它的非

  关系性，数据库的结构简单

- 灵活的数据模型： NoSQL无需事先为要存储的数据建立字段， 随时可以存储自定义的数据格式。 而在关系数

  据库中， 增删字段是一件非常麻烦的事情。 如果是非常大数据量的表， 增加字段简直就是一个噩梦

### 02 |  mongodb的安装

**命令安装**

在ubuntu中使用apt-get工具安装

```
sudo apt-get install -y mongodb-org
```

> 参考官方文档 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

**源码安装**

- 选择相应版本和操作系统并下载

  ```
  https://www.mongodb.com/download-center/community?jmp=docs
  ```

- 解压

  ```
  tar -zxvf mongodb-linux-x86_64-ubuntu1804-4.0.3.tgz
  ```

- 移动到/usr/local/目录下

  ```
  sudo mv -r mongodb-linux-x86_64-ubuntu1804-4.0.3/ /usr/local/mongodb
  ```

- 在shell的初始化脚本.bashrc中添加mongodb可执行文件到环境变量PATH中

  ```
  # 进入.bashrc文件中
  cd ~
  sudo vi .bashrc
  
  # 在.bashrc文件的最后添加：
  export PATH=/usr/local/mongodb/bin:$PATH
  ```

  

## Mongodb 的简单使用

### 01 | mongodb服务端的启动

- 默认端口：27017
- 默认配置文件的位置：/etc/mongod.conf
- 默认日志的位置：/var/log/mongodb/mongod.log

mongodb服务端启动分别两种方式：

- 本地测试方式的启动（只具有本地数据增删改查的功能）
- 生产环境启动（具有完整的全部功能）

#### 01 | 测试方式启动

- 启动: sudo service mongod start (sudo service mongod start)
- 停止: sudo service mongod stop
- 重启: sudo service mongod restart



#### 02 | 生产环境正式的启动方式

> 启动: sudo mongod [--auth --dbpath=dbpath --logpath=logpath --append --fork] [-–f logfile ]

- 只以 sudo mongod 命令启动时，默认将数据存放在了 /data/db 目录下，需要手动创建
- --dbpath: 指定数据库的存放路径
- --logpath: 指定日志的存放路径
- --append: 或--logappend 设置日志的写入形式为追加模式
- --fork: 或-fork 开启新的进程运行mongodb服务
- --f: 或-f 配置文件路径(可以将上述配置信息写入文件然后通过该文件中的参数进行加载启动)
- --auth: 以权限认证的方式启动

#### 03 |  查看是否启动成功

ps aux | grep mongod



### 02 | 启动mongodb的客户端：进入mongo shell

- 启动本地客户端: mongo
- 查看帮助：mongo –help
- 退出：exit或者ctrl+c



### 03 | mongodb的简单使用

开启mongodb server的情况下，在进入mongo shell后，就可以做简单的使用了

#### 01 | mongodb数据库的命令

- 查看当前的数据库：db(没有切换数据库的情况下默认使用test数据库)
- 查看所有的数据库：show dbs /show databases
- 切换数据库：use db_name 
  - db_name为show dbs后返回的数据库名
- 删除当前的数据库：db.dropDatabase()

#### 02 | mongodb集合的命令

- 无需手动创建集合：
  向不存在的集合中第一次添加数据时，集合会自动被创建出来
- 手动创建集合：
  - db.createCollection(name,options)
  - db.createCollection("stu")
  - db.createCollection("sub", { capped : true, size : 10 } )
  - 参数capped：默认值为false表示不设置上限，值为true表示设置上限
  - 参数size：集合所占用的字节数。 当capped值为true时，需要指定此参数，表示上限大小，当文档达到上限时， 会将之前的数据覆盖，单位为字节
- 查看集合：show collections
- 删除集合：db.集合名称.drop()
- 检查集合是否设定上限: db.集合名.isCapped()

#### 03 | 简单练习

> 在mongo shell中输入下列命令，查看结果

```
show dbs
use test
show collections
db
db.stu.insert({'name':'郭靖', 'age':22})
show dbs
show collections
db.stu.find()
db.stu.drop()
show collections
db.dropDatabase()
show dbs
exit
```



#### 04 | mongodb中常见的数据类型（了解）

- Object ID： 文档ID/数据的ID，数据的主键
- String： 字符串，最常用，必须是有效的UTF-8
- Boolean： 存储一个布尔值，true或false
- Integer： 整数可以是32位或64位，这取决于服务器
- Double： 浮点数
- Arrays： 数组/列表
- Object： mongodb中的一条数据/文档，即文档嵌套文档
- Null： 存储null值
- Timestamp： 时间戳，表示从1970-1-1到现在的总秒数
- Date： 存储当前日期或时间的UNIX时间格式



#### 05 | 注意点

- 每个文档都有一个属性，为_id，保证每个文档的唯一性，mongodb默认使用_id作为主键

  - 可以手动设置_id的值，如果没有提供，那么MongoDB为每个文档提供了一个独特的_id， 类型为objectID

- objectID是一个12字节的十六进制数,每个字节两位，一共是24位的字符串：
  - 前4个字节为当前时间戳
  - 接下来3个字节的机器ID
  - 接下来的2个字节中MongoDB的服务进程id
  - 最后3个字节是简单的增量值



## Mongodb的的增删改查

### 01 | mongodb插入数据

命令：`db.集合名称.insert(document)`

```
db.stu.insert({name:'gj', gender:1})
db.stu.insert({_id:"20170101", name:'gj', gender:1})
```

插文档时，如果不指定_id参数，MongoDB会为文档自动分配一个唯一的ObjectId  

### 02 | mongodb的保存

命令：`db.集合名称.save(document)`

```
db.stu.save({_id:'20170101', name:'gj', gender:2})
db.stu.save({name:'gj', gender:2})
db.stu.find()
```

如果文档的_id已经存在则修改，如果_id不存在则添加

### 03 | mongodb的查询

命令：`db.集合名称.find()`

> 可以使用以下数据进行练习

```
db.stu.insert([{"name" : "郭靖", "hometown" : "蒙古", "age" : 20, "gender" : true },
{"name" : "黄蓉", "hometown" : "桃花岛", "age" : 18, "gender" : false },
{"name" : "华筝", "hometown" : "蒙古", "age" : 18, "gender" : false },
{"name" : "黄药师", "hometown" : "桃花岛", "age" : 40, "gender" : true },
{"name" : "段誉", "hometown" : "大理", "age" : 16, "gender" : true },
{"name" : "段王爷", "hometown" : "大理", "age" : 45, "gender" : true },
{"name" : "洪七公", "hometown" : "华筝", "age" : 18, "gender" : true }])
```

#### 01 |  简单查询

- 方法find()： 查询

  `db.集合名称.find({条件文档})`

- 方法findOne()：查询，只返回第一个

  `db.集合名称.findOne({条件文档})`

- 方法pretty()： 将结果格式化；不能和findOne()一起使用！

  `db.集合名称.find({条件文档}).pretty()`

#### 02 | 比较运算符

- 等于： 默认是等于判断， 没有运算符
- 小于：`$lt （less than）`
- 小于等于：`$lte （less than equal）`
- 大于：`$gt （greater than）`
- 大于等于：`$gte`
- 不等于：`$ne`

```
查询年龄大于18的所有学生
db.stu.find({age:{$gte:18}})
```

#### 03 | 逻辑运算符

> 逻辑运算符主要指与、或逻辑

- and：在json中写多个条件即可

```
查询年龄大于或等于18， 并且性别为true的学生
db.stu.find({age:{$gte:18},gender:true})
```

- or:使用$or， 值为数组， 数组中每个元素为json

```
查询年龄大于18， 或性别为false的学生
db.stu.find({$or:[{age:{$gt:18}},{gender:false}]})

查询年龄大于18或性别为男生， 并且姓名是郭靖
db.stu.find({$or:[{age:{$gte:18}},{gender:true}],name:'gj'})
```

#### 04 | 范围运算符

使用`$in`， `$nin` 判断数据是否在某个数组内

```
查询年龄为18、 28的学生
db.stu.find({age:{$in:[18,28,38]}})
```

#### 05 |  支持正则表达式

使用$regex编写正则表达式

```
查询name以'黄'开头的数据
db.stu.find({name:{$regex:'^黄'}})
```

#### 06 | 自定义查询

> mongo shell 是一个js的执行环境
> 使用$where 写一个函数， 返回满足条件的数据

```
查询年龄大于30的学生
db.stu.find({
 $where:function() {
     return this.age>30;}
})
```

#### 07 |  skip和limit

- 方法limit()： 用于读取指定数量的文档

```
db.集合名称.find().limit(NUMBER)
查询2条学生信息
db.stu.find().limit(2)
```

- 方法skip()： 用于跳过指定数量的⽂档

```
db.集合名称.find().skip(NUMBER)
db.stu.find().skip(2)
```

- 同时使用

```
db.stu.find().limit(4).skip(5)
db.stu.find().skip(5).limit(4)
```

注意：先使用skip在使用limit的效率要高于前者

#### 08 | 投影

在查询到的返回结果中， 只选择必要的字段

命令：`db.集合名称.find({},{字段名称:1,...})`

参数为字段与值， 值为1表示显示， 值为0不显
特别注意： 

- 对于_id列默认是显示的， 如果不显示需要明确设置为0
- 对于其他不显示的字段不能设置为0

`db.stu.find({},{_id:0,name:1,gender:1})`

#### 09 | 排序

方法sort()， 用于对查询结果按照指定的字段进行排序

命令：`db.集合名称.find().sort({字段:1,...})`

参数1为升序排列
参数-1为降序排列

```
根据性别降序， 再根据年龄升序
db.stu.find().sort({gender:-1,age:1})
```

#### 10 | 统计个数

方法count()用于统计结果集中文档条数

命令：`db.集合名称.find({条件}).count()`
命令：`db.集合名称.count({条件})`

```
db.stu.find({gender:true}).count()
db.stu.count({age:{$gt:20},gender:true})
```

### 04 | mongodb的更新

```
db.集合名称.update({query}, {update}, {multi: boolean})
```

- 参数query:查询条件
- 参数update:更新操作符
- 参数multi:可选，默认是false，表示只更新找到的第一条数据，值为true表示把满足条件的数据全部更新

```
db.stu.update({name:'hr'},{name:'mnc'})           # 全文档进行覆盖更新
db.stu.update({name:'hr'},{$set:{name:'hys'}})    # 指定键值更新操作
db.stu.update({},{$set:{gender:0}},{multi:true})  # 更新全部
```

注意："multi update only works with $ operators"

- multi参数必须和$set一起使用！

### 05 |  mongodb的删除

```
db.集合名称.remove({query}, {justOne: boolean})
```

	- 参数query:可选，删除的⽂档的条件
	- 参数justOne:可选， 如果设为true或1，则只删除一条，默认false，表示删除全部

### 小结

1. mongo shell中的增
   db.集合名.insert({数据})
   db.集合名.save({包含_id的完整数据}) # 根据指定的_id进行保存，存在则更新，不存在则插入
2. mongo shell中的删
   db.集合名.remove({条件}, {justOne: true/false})
3. mongo shell中的改
   db.集合名.update({条件}, {$set:{完整数据/部分字段}}, {multi: true/false})
4. mongo shell中的查
   db.集合名.find({条件}, {字段投影})

## Mongodb的聚合操作

### 01 | mongodb的聚合是什么

聚合(aggregate)是基于数据处理的聚合管道，每个文档通过一个由多个阶段（stage）组成的管道，可以对每个阶

段的管道进行分组、过滤等功能，然后经过一系列的处理，输出相应的结果。

语法：`db.集合名称.aggregate({管道:{表达式}})`

![pc_04](assets/pc_04.jpg)

### 02 | mongodb的常用管道和表达式

知识点：

- 掌握mongodb中管道的语法
- 掌握mongodb中管道命令

#### 2.1 常用管道命令

 在mongodb中，⽂档处理完毕后， 通过管道进⾏下⼀次处理
 常用管道命令如下：

 - `$group`： 将集合中的⽂档分组， 可⽤于统计结果
 - `$match`： 过滤数据， 只输出符合条件的⽂档
 - `$project`： 修改输⼊⽂档的结构， 如重命名、 增加、 删除字段、 创建计算结果
 - `$sort`： 将输⼊⽂档排序后输出
 - `$limit`： 限制聚合管道返回的⽂档数
 - `$skip`： 跳过指定数量的⽂档， 并返回余下的⽂档

#### 2.2 常用表达式

 表达式：处理输⼊⽂档并输出
 语法：`表达式:'$列名'`
 常⽤表达式:

 - `$sum`： 计算总和， $sum:1 表示以⼀倍计数
 - `$avg`： 计算平均值
 - `$min`： 获取最⼩值
 - `$max`： 获取最⼤值
 - `$push`： 在结果⽂档中插⼊值到⼀个数组中

### 03 | 管道命令之`$group`

#### 3.1 按照某个字段进行分组

`$group`是所有聚合命令中用的最多的一个命令，用来将集合中的文档分组，可用于统计结果

使用示例如下

```json
db.stu.aggregate(
    {$group:
        {
            _id:"$gender",
            counter:{$sum:1}
        }
    }
)
```

其中注意点：

- `db.db_name.aggregate`是语法，所有的管道命令都需要写在其中
- `_id` 表示分组的依据，按照哪个字段进行分组，需要使用`$gender`表示选择这个字段进行分组
- `$sum:1` 表示把每条数据作为1进行统计，统计的是该分组下面数据的条数

#### 3.2  group by null

当我们需要统计整个文档的时候，`$group` 的另一种用途就是把整个文档分为一组进行统计

使用实例如下：

```json
db.stu.aggregate(
    {$group:
        {
            _id:null,
            counter:{$sum:1}
        }
    }
)
```

其中注意点：

- `_id:null` 表示不指定分组的字段，即统计整个文档，此时获取的`counter`表示整个文档的个数

#### 3.3 数据透视

正常情况在统计的不同性别的数据的时候，需要知道所有的name，需要逐条观察，如果通过某种方式把所有的name放到一起，那么此时就可以理解为数据透视

使用示例如下：

1. 统计不同性别的学生

   ```json
   db.stu.aggregate(
       {$group:
           {
               _id:null,
               name:{$push:"$name"}
           }
       }
   )
   ```

2. 使用`$$ROOT`可以将整个文档放入数组中

   ```json
   db.stu.aggregate(
       {$group:
           {
               _id:null,
               name:{$push:"$$ROOT"}
           }
       }
   )
   ```

#### 3.4 动手

对于如下数据，需要统计出每个country/province下的userid的数量（同一个userid只统计一次）

```json
{ "country" : "china", "province" : "sh", "userid" : "a" }  
{  "country" : "china", "province" : "sh", "userid" : "b" }  
{  "country" : "china", "province" : "sh", "userid" : "a" }  
{  "country" : "china", "province" : "sh", "userid" : "c" }  
{  "country" : "china", "province" : "bj", "userid" : "da" }  
{  "country" : "china", "province" : "bj", "userid" : "fa" }
```

参考答案

```
db.tv3.aggregate(
  {$group:{_id:{country:'$country',province:'$province',userid:'$userid'}}},
  {$group:{_id:{country:'$_id.country',province:'$_id.province'},count:{$sum:1}}}

```

### 04 | 管道命令之`$match`

`$match`用于进行数据的过滤，是在能够在聚合操作中使用的命令，和`find`区别在于`$match` 操作可以把结果交给下一个管道处理，而`find`不行

使用示例如下：

1. 查询年龄大于20的学生

   ```json
   db.stu.aggregate(
       {$match:{age:{$gt:20}}
       )
   ```

2. 查询年龄大于20的男女学生的人数

   ```json
   db.stu.aggregate(
       {$match:{age:{$gt:20}}
       {$group:{_id:"$gender",counter:{$sum:1}}}
       )
   ```

### 05 | 管道命令之`$project`

`$project`用于修改文档的输入输出结构，例如重命名，增加，删除字段

使用示例如下：

1. 查询学生的年龄、姓名，仅输出年龄姓名

   ```json
   db.stu.aggregate(
       {$project:{_id:0,name:1,age:1}}
       )
   ```

2. 查询男女生人生，输出人数

   ```json
   db.stu.aggregate(
       {$group:{_id:"$gender",counter:{$sum:1}}}
       {$project:{_id:0,counter:1}}
       )
   ```

#### 5.1 动手练习

对于如下数据：统计出每个country/province下的userid的数量（同一个userid只统计一次），结果中的字段为{country:"**"，province:"**"，counter:"*"}

```json
{ "country" : "china", "province" : "sh", "userid" : "a" }  
{  "country" : "china", "province" : "sh", "userid" : "b" }  
{  "country" : "china", "province" : "sh", "userid" : "a" }  
{  "country" : "china", "province" : "sh", "userid" : "c" }  
{  "country" : "china", "province" : "bj", "userid" : "da" }  
{  "country" : "china", "province" : "bj", "userid" : "fa" }  
```

参考答案

```
db.tv3.aggregate(
  {$group:{_id:{country:'$country',province:'$province',userid:'$userid'}}},
  {$group:{_id:{country:'$_id.country',province:'$_id.province'},count:{$sum:1}}},
  {$project:{_id:0,country:'$_id.country',province:'$_id.province',counter:'$count'}}
  )

```

### 06 | 管道命令之`$sort`

`$sort`用于将输入的文档排序后输出

使用示例如下：

1. 查询学生信息，按照年龄升序

   ```json
   db.stu.aggregate({$sort:{age:1}})
   ```

2. 查询男女人数，按照人数降序

   ```json
   db.stu.aggregate(
       {$group:{_id:"$gender",counter:{$sum:1}}},
       {$sort:{counter:-1}}
   )
   ```

### 07 | 管道命令之`$skip` 和 `$limit`

- `$limit`限制返回数据的条数
- `$skip` 跳过指定的文档数，并返回剩下的文档数
- 同时使用时先使用skip在使用limit

使用示例如下：

1. 查询2条学生信息

   ```json
   db.stu.aggregate(
       {$limit:2}
   )
   ```

2. 查询从第三条开始的学生信息

   ```json
   db.stu.aggregate(
       {$skip:3}
   )
   ```

3. 统计男女生人数，按照人数升序，返回第二条数据

   ```json
   db.stu.aggregate(
       {$group:{_id:"$gender",counter:{$sum:1}}},
       {$sort:{counter:-1}},
       {$skip:1},
       {$limit:1}
   )
   ```

## Mongodb的索引操作

**为什么mongdb需要创建索引:**

- 加快查询速度
- 进行数据的去重

### 01 |  mongodb创建简单的索引方法

语法：`db.集合名.ensureIndex({属性:1})`，1表示升序， -1表示降序

### 02 | 创建索引前后查询速度对比

> 测试：插入10万条数据到数据库中

插入数据：

```
for(i=0;i<100000;i++){db.t1.insert({name:'test'+i,age:i})}
```

创建索引前：

```
db.t1.find({name:'test10000'})
db.t1.find({name:'test10000'}).explain('executionStats') # 显示查询操作的详细信息
```

创建索引：

```
db.t1.ensureIndex({name:1})
```

创建索引后：

```
db.t1.find({name:'test10000'}).explain('executionStats')
```

前后速度对比

![pc_05](assets/pc_05.jpg)

### 03 | 索引的查看

默认情况下_id是集合的索引
查看方式：`db.集合名.getIndexes()`

### 04 | 删除索引

语法：`db.集合名.dropIndex({'索引名称':1})`

```
db.t1.dropIndex({name:1})
db.t1.getIndexes()
```

### 05 | mongodb创建唯一索引

在默认情况下mongdb的索引域的值是可以相同的，创建唯一索引之后，数据库会在插入数据的时候检查创建索引

域的值是否存在，如果存在则不会插入该条数据，但是创建索引仅仅能够提高查询速度,同时降低数据库的插入速

度。

**添加唯一索引的语法：**

```
db.集合名.ensureIndex({"字段名":1}, {"unique":true})
```

**利用唯一索引进行数据去重:**

> 根据唯一索引指定的字段的值，如果相同，则无法插入数据

```
db.t1.ensureIndex({"name":1}, {"unique":true})
db.t1.insert({name: 'test10000'})
```

### 06 | 建立复合索引

在进行数据去重的时候，可能用一个域来保证数据的唯一性，这个时候可以考虑建立复合索引来实现。

例如：抓全贴吧信息，如果把帖子的名字作为唯一索引对数据进行去重是不可取的，因为可能有很多帖子名字相同

建立复合索引的语法：`db.collection_name.ensureIndex({字段1:1,字段2:1})`

### 07 | 建立索引注意点

- 根据需要选择是否需要建立唯一索引

- 索引字段是升序还是降序在单个索引的情况下不影响查询效率，但是带复合索引的条件下会有影响

- 数据量巨大并且数据库的读出操作非常频繁的时候才需要创建索引，如果写入操作非常频繁，创建索引会影响写入速度

  > 例如：在进行查询的时候如果字段1需要升序的方式排序输出，字段2需要降序的方式排序输出，那么此时复合索引的建立需要把字段1设置为1，字段2设置为-1

## Mongodb的权限管理

刚安装完毕的mongodb默认不使用权限认证方式启动，与MySQL不同，mongodb在安装的时候并没有设置权

限，然而公网运行系统需要设置权限以保证数据安全，所以我们要学习mongodb的权限管理

### 01 | mongodb的权限管理方案

MongoDB是没有默认管理员账号，所以要先添加管理员账号，并且mongodb服务器需要在运行的时候开启验证模式

- 用户只能在用户所在数据库登录(创建用户的数据库)，包括管理员账号。
- 管理员可以管理所有数据库，但是不能直接管理其他数据库，要先认证后才可以。

### 02 | mongodb超级管理员账号的创建

#### 2.1 创建超级用户

进入mongo shell

```
sudo mongod
```

使用admin数据库(超级管理员账号必须创建在该数据库上)

```
use admin
```

创建超级用户

```
db.createUser({"user":"python","pwd":"python","roles":["root"]})
```

创建成功会显示如下信息

```
Successfully added user: { "user" : "python", "roles" : [ "root" ] }
```

退出mongo shell

```
exit
```

#### 2.2 以权限认证的方式启动mongodb数据库

```
sudo mongod --auth
```

启动之后在启动信息中会有如下信息，说明mongodb以权限认证的方式启动成功

```
[initandlisten] options: { security: { authorization: "enabled" } }
```

#### 2.3 登录验证

此时再使用数据库各命令的时候会报权限错误，需要认证才能执行相应操作、

```
use admin
db.auth('python','python')
```

- python用户是创建在admin数据库上的所以必须来到admin数据库上进行认证
- 认证成功会返回1，失败返回0

### 03 | 创建普通用户

#### 3.1 在使用的数据库上创建普通用户

1.选择需要创建用户的数据库

```
use test1
```

2. 创建用户

```
db.createUser("user":"user1", "pwd":"pwd1", roles:["read"])
创建普通用户user1,该用户在test1上的权限是只读
db.createUser("user":"user1", "pwd":"pwd1", roles:["readWrite"])
创建普通用户user1,该用户在test1上的权限是读写
```

#### 3.2 在admin用户数据库上创建普通用户

```
use admin
db.createUser({"user":"python1", "pwd":"python1", roles:[{"role":"read","db":"dbname1"},{"role":"readWrite","db":"dbname2"}
]})
```

在admin上创建python1用户，python1用户的权限有两个，一个再dbname1上的只读，另一个是在dbname2上的读写

### 04 | 查看创建的用户

```
show users
{
	"_id" : "admin.python",
	"user" : "python",
	"db" : "admin",
	"roles" : [
		{
			"role" : "root",
			"db" : "admin"
		}
	]
}
```

### 05 |  删除用户

#### 5.1 进入账号数据所在的数据库

```
use db_name
```

#### 5.2 删除用户

```
db.dropUser('python')
```

## Mongodb和python交互

### 01 | mongdb和python交互的模块

`pymongo` 提供了mongdb和python交互的所有方法
安装方式: `pip install pymongo`

### 02 | 使用pymongo

#### 2.1 导入pymongo并选择要操作的集合

> 数据库和集合能够自动创建

##### 2.1.1 无需权限认证的方式创建连接对象以及集合操作对象

```python
from pymongo import MongoClient

client = MongoClient(host,port) # 如果是本地连接host,port参数可以省略

collection = client[db名][集合名]
# collection = client.db名.集合名 # 与上边用法相同
```

##### 2.1.2 需要权限认证的方式创建连接对象以及集合操作对象

```python
from pymongo import MongoClient
from urllib.parse import quote_plus

user = 'python' # 账号
password = 'python' # 密码
host = '127.0.0.1' # host
port = 27017 # port
uri = "mongodb://%s:%s@%s" % (quote_plus(user),
                              quote_plus(password),
                              host)
# quote_plus函数：对url进行编码
# uri = mongodb://python:python@127.0.0.1
client = MongoClient(uri, port=port)
collection = client.db名.集合名
```

#### 2.2 insert()添加数据

> insert可以批量的插入数据列表，也可以插入一条数据

```python
collection.insert({一条数据})
collection.insert([{数据一},{数据二}])
```

##### 2.2.1 添加一条数据

> 返回插入数据的_id

```python
ret = collection.insert({"name":"test10010","age":33})
print(ret)
```

##### 2.2.2 添加多条数据

> 返回ObjectId对象构成的列表

```python
item_list = [{"name":"test1000{}".format(i)} for i in range(10)]
rets = collection.insert(item_list)
print(rets)
for ret in rets:
    print(ret)
```

#### 2.3 find_one()查找一条数据

> 接收一个字典形式的条件，返回字典形式的整条数据
> 如果条件为空，则返回第一条

```python
ret = client.test.test.find_one({'name': 'test10001'})
print(ret) # 包含mongodb的ObjectId对象的字典
_ = ret.pop('_id') # 清除mongodb的ObjectId对象的k,v
print(ret) 
```

#### 2.4 find()查找全部数据

> 返回所有满足条件的结果，如果条件为空，则返回全部
> 结果是一个Cursor游标对象，是一个可迭代对象，可以类似读文件的指针，但是只能够进行一次读取

```python
rets = collection.find({"name":"test10005"})，
for ret in rets:
    print(ret)
for ret in rets: #此时rets中没有内容
    print(ret)
```

#### 2.5 update()更新数据(全文档覆盖或指定键值，更新一条或多条)

- 语法：collection.update({条件}, {'$set':{指定的kv或完整的一条数据}}, multi=False/True, upsert=False/True)
- multi参数：默认为False,表示更新一条; multi=True则更新多条; multi参数必须和$set一起使用
- upsert参数：默认为False; upsert=True则先查询是否存在,存在则更新;不存在就插入
- $set表示指定字段进行更新

##### 2.5.1 更新一条数据；全文档覆盖；存在就更新，不存在就插入

```python
data = {'msg':'这是一条完整的数据1','name':'哈哈'}
client.test.test.update({'haha': 'heihei'}, {'$set':data}, upsert=True)
```

##### 2.5.2 更新多条数据；全文档覆盖；存在就更新，不存在就插入

```python
data = {'msg':'这是一条完整的数据2','name':'哈哈'} # 该完整数据是先查询后获取的
client.test.test.update({}, {'$set':data}, multi=True, upsert=True)
```

##### 2.5.3 更新一条数据；指定键值；存在就更新，不存在就插入

```python
data = {'msg':'指定只更新msg___1'}
client.test.test.update({}, {'$set':data}, upsert=True)
```

##### 2.5.4 更新多条数据；指定键值；存在就更新，不存在就插入

```python
data = {'msg':'指定只更新msg___2'}
client.test.test.update({}, {'$set':data}, multi=True, upsert=True)
```

#### 2.6 delete_one()删除一条数据

```python
collection.delete_one({"name":"test10010"})
```

#### 2.7 delete_many()删除全部数据

```python
collection.delete_many({"name":"test10010"})
```

### 3. pymongo模块其他api

> 查看pymongo官方文档或源代码 http://api.mongodb.com/python/current/

## 总结图

![pc_06](assets/pc_06.png)



