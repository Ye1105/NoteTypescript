/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-06 17:52:55
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-06 18:01:52
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



