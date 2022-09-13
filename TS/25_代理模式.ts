

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

    constructor(){}

    getNum(num1:number,num2:number){
        /* 拿到num1和num2计算后的结果 */
       let num= this.delegate.cal(num1,num2)
       console.log(num)
    }
}

let per=new Person()
per.delegate=new NPC1()
per.getNum(1,2)
