<!--
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 11:22:17
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-06 18:02:34
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

---

*italic*
**bold**

![目标文本](目标地址)

[github](http://github.com)

first header |second header
-------------|--------------
content 1    | content 2