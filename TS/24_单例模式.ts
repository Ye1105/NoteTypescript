/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-13 11:52:53
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-13 11:59:12
 * @FilePath: \TS_PROJECT\TS\单例模式.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

class Manager{

    //static Instance=new Manager()

    private static instance:Manager

    private constructor(){}

    static Instance(){
        /* 当前单例是否产生 */
        if(!this.instance)
            this.instance=new Manager()
        return this.instance
    }
}

//Manager.Instance

Manager.Instance