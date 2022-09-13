/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-07 11:28:42
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-07 11:55:59
 * @FilePath: \TS_PROJECT\09_接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/* 接口 */
interface IPerson{
    name:string
    age:number
    sayHi():void
}

let teacher:IPerson={
    name:"ye",
    age:10,
    sayHi:()=>{}
}

type SName=number|string

/* 类型别名 */
type IStudent={
    name:number|string
    age:number
    sayHi():void
}

let student:IStudent={
    name:'11',
    age:0,
    sayHi:()=>{}
}



interface Pointer2D{x:number;y:number}

interface Pointer3D extends Pointer2D {z:number}


let ps:Pointer3D={
    x:1,
    y:2,
    z:3
}