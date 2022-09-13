/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-13 13:37:18
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 13:49:34
 * @FilePath: \TS_PROJECT\TS\27_工厂模式.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

enum CarType{
    Bmw,
    Audi,
    Benz
}

class Car{
    name:string

    static Create(carType:CarType):Car{
        let car:Car
        switch (carType) {
            case CarType.Audi:
                car=new AudiCar()
                break;
            case CarType.Bmw:
                car=new BmwCar()
                break;
            default:
                car=new Car()
                break;
        }
        return car
    }
}

class BmwCar extends Car{
    
}

class AudiCar extends Car{
    
}

let bwn=Car.Create(CarType.Bmw)


