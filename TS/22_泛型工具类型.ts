/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-09 12:22:51
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-09 12:44:16
 * @FilePath: \TS_PROJECT\22_泛型工具类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


interface Props<Type>{
    id:Type,
    children:Type[]
}

type MyProps=Partial<Props<number>>

let p1:Props<number>={
    id: 0,
    children: []
}

let p2:MyProps={}

/* ----------------------------------------------- */


interface Props2{
    id:string,
    title:string,
    name:string
}

type PickProps=Pick<Props2,'id'|'title'>


/* ----------------------------------------------- */


type RecordObj=Partial<Record<'id'|'name',string>>

let obj:RecordObj={
    id: ""
}
