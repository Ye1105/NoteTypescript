<!--
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 11:22:17
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @FilePath: \TS_PROJECT\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 11:22:17
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-08 13:58:35
 * @FilePath: \TS_PROJECT\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## TYPESCRIPT 类型注解 


[TypeScrpit官网](https://www.typescriptlang.org/)

[TypeScript参考教程](https://docs.cocos.com/creator/manual/zh/scripting/language-support.html)

[B站学习视频](https://www.bilibili.com/video/BV14Z4y1u7pi?p=15&spm_id_from=pageDriver&vd_source=874ef91701c817855be9727acd96b7cd)
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

  *  **typeof** 出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型的上下文（区别于JS代码）
  *  注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）


---
  # TS中的高级类型

  1. class 类
  2. 类型兼容性
  3. 交叉类型
  4. 泛型和keyof
  5. 索引签名类型和索引查询类型
  6. 映射类型


---

  # class 类

  > class Person{}
    const p=new Person()

  1. 根据TS中的类型推论，可以知道Person类的实例对象p的类型是Person
  2. TS中的**class,不仅提供了class的语法功能，也作为一种类型存在**


  **类继承的两种方式：** 1.extends (继承父类) 2.implements(实现接口)

  class:
    **修饰符**：可以使用TS来控制**class的方法或属性对于class外的代码是否可见**
    可见性修饰符包括:1.public(共有的) 2.protected(受保护的) 3.private(私有的)

  * protected: 在子类的方法内部可以通过this来访问父类中受保护的成员，但是，**对实例不可见**
  
  * private:私有的属性或者方法只在当前类中可见，在子类和实例中不可见
  
  * readonly:表示只读，用来**防止在构造函数之外对属性进行赋值**
             **接口或者{}表示的对象类型，也可以使用readonly**

  implement:
  1. 通过implements 关键字让class实现接口
  2. Person 类实现接口Singable意味着，Person类中必须提供Singable接口中
     **指定的所有方法和属性**
  
---

  # 类型兼容性

  两种类型兼容性： 1 Structural Type System (结构化类型系统)  2 Nominal Type System(标明类型系统)

  **TS采用的是结构化类型系统**，也叫做duck typing(鸭子类型),**类型检测关注的是值所具有的形状**  

  类型兼容性：

  注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法不准确。**更准确的说法：对于对象类型来说，y的成员至少与x相同，则x兼容y(成员多的可以赋值给少的)**

  **函数之间兼容性比较复杂**，需要考虑：1参数个数 2参数类型  3返回值类型


---

  # 交叉类型

  **交叉类型（&）**：功能类似于接口继承(extends)，**用于组合多个类型为一个类型(常用于对象类型)**

  > interface Person {name:string}
    interface Contact {phone:string}
    type PersonDetail=Person & Contact
    let obj:PersonDetail={
      name:'jack',
      phone:'122...'
    }

---
  # 泛型
  
  > //function id<Type>(value:Type):void{
    console.log(value)
  }
  > //const id:<Type>(value:Type) => void=(value) => {  console.log(value) }
  const id=<Type>(value:Type):void => { console.log(value) }
  const id2=<Type>(value:Type):Type => {return value }
  id(1)
  id<string>('xiaoming')

  **泛型约束**:默认情况下，泛型函数的类型变量Type可以代表多个类型，这导致无法访问属性。
  比如 id('a')调用函数式获取参数的长度

  > const id=<Type>(value:Type):Type => { 
      console.log(value.length)
      return value
  }

  解释：Type可以代表任意类型，无法保证一定存在length属性，比如number类型就没有length。
  此时，就需要为泛型**添加约束**来收缩类型(缩窄类型取值范围)


>interface ILength{length:number}
function id<Type extends ILength>(value:Type):Type{
    console.log(value.length)
    return value
}

解释：
1. 创建描述约束的接口ILength，该接口要求提供length属性
2. 通过 **extends** 关键字使用该接口，为泛型（类型变量）添加约束
3. 该约束表示 ：**传入的类型必须具有length属性**


泛型的类型变量可以有多个，并且**变量之间还可以约束**(比如，第二个类型变量受第一个类型变量的约束)，
比如，创建一个函数来获取对象中属性的值

>function getProp<Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key]
}
let person={name:'xiaoye',age:18}
console.log(getProp(person,'name'))

解释：
1. 添加了第二个类型变量Key,连个类型变量之间使用(,)**逗号**分隔
2. keyof 关键字 接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型
3. 类型变量Key受Type约束，可以理解为：Key只能是Type所有键中的任意一个，或者说只能访问对象中存在的属性


**泛型接口**:接口也可以配合泛型来使用，以增强其灵活性，增强其复用性

>interface IdFunc<Type>{
    id:(value:Type) => Type
    ids:() => Type[]
}
let obj:IdFunc<String>={
    id: function (value: String): String {
        throw new Error("Function not implemented.")
    },
    ids: function (): String[] {
        //throw new Error("Function not implemented.")
        return ['1']
    }
}
obj.ids

解释：
1. 在接口名称的后面添加<类型变量>,那么,这个接口就变成了泛型接口
2. 接口的类型变量，对接口汇总所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**
3. 使用泛型接口时，需要**显示指定**具体的**类型**(比如：此处的IdFunc<number>)
   

**泛型工具类型**

Partial: **Partial<Type> 用来构造（创建）一个类型，将Type的所有属性设置为可选**

Readonly: **Readonly<Type> 用来构造一个类型，将Type的所有属性都设置为readonly(只读)**

Pick<Type,Keys>: **从Type中选择一组属性来构造新类型**

Record<Keys,Type>: **构造一个对象类型，属性键位Keys,属性类型为Type**

**索引签名类型**
---

 # namespace

  >namespace a{
    export class Person{
      name:string
    }
  }
  let person=new a.Person()

---
*italic*
**bold**

[github](http://github.com)

| first header | second header |
| ------------ | ------------- |
| content 1    | content 2     |