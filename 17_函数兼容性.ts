/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-08 14:33:35
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-08 14:51:21
 * @FilePath: \TS_PROJECT\17_函数兼容性.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type F1=(a:number)=>void
type F2=(a:number,b:number) => void

let f1:F1=() => { }
let f2:F2=() => { }

f2=f1

//f1=f2