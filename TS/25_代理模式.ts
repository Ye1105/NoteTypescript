/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-13 12:05:38
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 14:47:38
 * @FilePath: \TS_PROJECT\TS\25_代理模式.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


interface Calulate{
    cal(num1:number,num2:number):number
}

class NPC1 implements Calulate{
    cal(num1: number, num2: number): number {
        return num1+num2
    }

}

class NPC2 implements Calulate{
    cal(num1: number, num2: number): number {
        return num1-num2
    }

}


class Person{    
    
    delegate:Calulate

    getNum(num1:number,num2:number){
        /* 拿到num1和num2计算后的结果 */
       let num= this.delegate.cal(num1,num2)
       console.log(num)
    }
}

let per=new Person()
per.delegate=new NPC1()
per.getNum(1,2)
