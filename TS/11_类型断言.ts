/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-07 14:29:40
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-07 14:33:04
 * @FilePath: \TS_PROJECT\11_类型断言.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const aLink=document.getElementById('link') as HTMLAnchorElement
//aLink.href

/* 不常用，和jsx冲突 */
const aLink2=<HTMLAnchorElement>document.getElementById('link')

//console.dir($0)