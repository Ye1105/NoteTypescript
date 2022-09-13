/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-09 12:52:11
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 11:26:22
 * @FilePath: \TS_PROJECT\23_索引签名类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

interface myArray<T>{
    [key:string]:T
}

let arry:myArray<string>={
    aa:'222'
}

interface MyArray<T>{
    [n:number]:T
}

let arr:MyArray<number>={
    0:1,
    1:2
}

let arr2:MyArray<number>=[1,2,3]

let dic:{[key:string]:string}={
    'xiaoming':'111'
}

console.log(dic['xiaoming']) 