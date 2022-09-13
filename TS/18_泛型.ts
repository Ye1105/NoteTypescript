/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-08 17:01:03
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-08 17:29:36
 * @FilePath: \TS_PROJECT\18_泛型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// function id<Type>(value:Type):void{
//     console.log(value)
// }

// const id:<Type>(value:Type) => void=(value) => {  console.log(value) }

const id=<Type>(value:Type):void => { console.log(value) }

const id2=<Type>(value:Type):Type => {return value }

id(1)

id<string>('xiaoming')