/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-08 17:01:03
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-09 10:22:21
 * @FilePath: \TS_PROJECT\18_泛型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



const id2=<Type>(value:Type[]):Type[] => {
    console.log(value.length)
    return value
}


id2<string>(['xiaoming'])

id2(['xiaoming'])


/* ========================================== */


interface ILength{length:number}

function id<Type extends ILength>(value:Type):Type{
    console.log(value.length)
    return value
}


function getProp<Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key]
}

let person={name:'xiaoye',age:18}
console.log(getProp(person,'name'))

getProp('1','slice')