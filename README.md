<!--
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 11:22:17
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-07 17:55:51
 * @FilePath: \TS_PROJECT\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
#TYPESCRIPT  MARKDOWN https://www.bilibili.com/video/BV14Z4y1u7pi?p=15&spm_id_from=pageDriver&vd_source=874ef91701c817855be9727acd96b7cd
---
# 运行TS的步骤  

1.node.js

2.npm i -g typescrpit

3.tsc **.ts

4.node **.js

---

# 简化运行TS的步骤

1.npm i -g ts-node

2.ts-node **.ts

ts-node:在内部实现了TS->JS


---
# TypeScrpit 常用类型

 **JS 已有类型** 
  * 原始类型：number/string/boolean/null/undefined/symbol
  * 对象类型：object(包括：数组、对象、函数等对象)
 
 **TS 新增类型** 
  * 联合类型：自定义类型（类型别名）、接口、元组、字面量类型、枚举、void、any等

---
# 类型别名

 **类型别名**（自定义类型）：为任意类型起别名
 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，简化改类型的使用

  1.使用type关键字来创建类型别名
  2.任意合法的变量名称
  3.使用该类型别名作为变量的类型注解

---

# 函数类型

 **函数类型**：函数参数和返回值的类型
  
  * 单独指定参数、返回值的类型

  * 同时指定参数、返回值的类型

  * 如果函数没有返回值，那么，函数返回值类型为:void

  * 可选参数：在可传可不传的参数名称后面添加 **？**（问号） 

---
# 对象类型

  JS中的对象是由属性和方法构成的，而TS中对象的类型就是在描述对象的结构（有什么类型的属性和方法）

  * 在一行代码中指定对象的多个属性类型时，使用**；分号**来分隔
  
  * 方法的类型也可以使用箭头函数形式（比如：{sayHi:()=>void})



---

# 接口

  当一个**对象类型**被多次使用时，一般会使用**接口**（interface）来描述对象的类型，达到复用的目的

  1.使用**interface**关键字来声明接口
  2，接口名称（比如：此处的IPerson),可以是任意合法的变量名称
  3.声明接口后，直接**使用接口名称作为变量的类型**
  4.因为每一行只有一个属性类型，因此**属性类型后没有；（分号）**

  **interface(接口)和type(类型别名)的对比**
  * 相同点：都可以给对象指定类型
    > interface IPerson{
      name:string,
      age:number,
      sayHi():void
    }

    > type IPerson={
      name:string,
      age:number,
      sayHi():void
    }

  * 不同点

    * 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

      > type NumStr=number |  string

  * 继承 **extends**

    1.使用**extends**(继承)关键字实现了接口继承
  
---

  # 元组 Tuple

  * 元组类型可以确切地标记出有多少个元素，以及每个元素的类型


---

  # 类型推论

  在TS中，某些没有明确支出类型的地方，TS的**类型推论机制会帮助提供类型**
  话句话说，由于类型推论的存在，这些地方，类型注解可省略不写
  发生类型推论的2种常见场景：
  1.声明变量**并初始化时**
  2.决定函数返回值时




---

  # 类型断言

  1. 使用**as**关键字实现类型断言
  2. 关键字**as**后面的类型是一个更加具体的类型（HTMLAnchorElement是HTMLElement的子类型）
  3. 通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法了
    > const aLink=document.getElementById('link') as HTMLAnchorElement

---

  # 字面量类型

  >let str1='hello ts'
   const str2='hello ts2'

  通过TS类型推论机制，可以得到答案：
  1.变量str1 的类型为：string
  2.变量str2 的类型为：'hello ts2'

  解释：
  1. str1 是一个变量（let) , 它的值可以是任意的字符串，所以类型为：string
  2. str2 是一个常量（const),它的值不能变化只能是'hello ts2'，所以，它的类型为:'hello ts2'
   
  注意：此处的'hello ts',就是一个**字面量类型**，也就是说**某个特定的字符串也可以作为TS中的类型**。除字符串外，任意的JS字面量（比如：对象、数组等）都可以作为类型使用。

  **使用模式：字面量类型配合联合类型一起使用**
  
  **使用场景：用来表示一组明确的可选值列表**

---

  # 枚举

  解释：
   
  * 使用enum关键字定义枚举

  * 约定枚举名称、枚举中的值以**大写字母**开头

  * 枚举中的多个值之间通过,分隔


**数字枚举**
  > enum Direction{Up=10,Down,Left,Right}
      enum Direction{Up=2,Down=4,Left=8,Right=16}

**字符串枚举**

  注意：**字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值**
  > enum Direction{Up='Up',Down='Down',Left='Left',Right='Right'}

  说明：枚举与前面讲的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表

  一般情况下，推荐使用**字面量类型+联合类型组合的方式**，因为相比较枚举，这种方式更加直观、简洁、高效


---

 # any  类型

---

  # typeof

---

*italic*
**bold**

![目标文本](目标地址)

[github](http://github.com)

first header |second header
-------------|--------------
content 1    | content 2