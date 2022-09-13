/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-13 13:16:29
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 13:33:47
 * @FilePath: \TS_PROJECT\TS\26_观察者模式.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE   
 */


interface IObserver{
    nameChanged(value:string):void
}

class Observer implements IObserver{
    nameChanged(value: string) {
        console.log("通知到了值发生变化",value)
    }
}

class Person{
    
    private _name:string=""

    observers:Array<IObserver>=new Array<IObserver>()

    setName(value:string){
        this._name=value
        /* 通知所有观察者 */
        for(let observer of this.observers){
            observer.nameChanged(''+this._name)
        }
    }

    getName()
    {
        console.log("getName:",this._name)
    }

}

let person=new Person()
let observer=new Observer()
person.observers.push(observer)
person.setName("xiaoming")