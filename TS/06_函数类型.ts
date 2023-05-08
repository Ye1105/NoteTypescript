/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 17:52:55
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 11:43:00
 * @FilePath: \TS_PROJECT\06_函数类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// function add(num1:number,num2:number):number{
//     return num1+num2
// }

// const add=(num1:number,num2:number):number => { 
//     return num1+num2
// }

const add:(num1:number,num2:number)=>number=(num1,num2)=>{
    return num1+num2
}


const res=add(1,2)

console.log(res)


const greet=(name:string):void=>{
    console.log(name)
}

greet("xiaoye")


const mySlice:(start?:number,end?:number)=>void=(start,end)=> {
    console.log("起始索引：",start,'结束索引',end)
 }


mySlice(1)
mySlice(1,2)


function fun(func:Function){
    func()
}

function fun2(func:()=>{}){
    func()
}