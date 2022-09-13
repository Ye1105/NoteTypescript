/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-09 11:46:04
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-09 11:49:00
 * @FilePath: \TS_PROJECT\21_泛型类.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

class GenericNumber<NumType>{
    defaultValue:NumType
    add:(x:NumType,y:NumType)=>NumType
}

const myNum=new GenericNumber<number>()

myNum.defaultValue=2
