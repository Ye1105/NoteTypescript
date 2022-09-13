/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-09 11:16:47
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-09 11:19:42
 * @FilePath: \TS_PROJECT\20_泛型接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


interface IdFunc<Type>{
    id:(value:Type) => Type
    ids:() => Type[]
}

let obj:IdFunc<String>={
    id: function (value: String): String {
        throw new Error("Function not implemented.")
    },
    ids: function (): String[] {
        //throw new Error("Function not implemented.")
        return ['1']
    }
}

obj.ids

