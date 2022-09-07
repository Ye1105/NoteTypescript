/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-07 15:31:19
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-07 17:26:23
 * @FilePath: \TS_PROJECT\13_enum.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


enum Direction{
    Up=10,
    Down,
    Left,
    Right
}

const changeDirection=(direction:Direction)=>{}


changeDirection(Direction.Down)


enum DirectionStr{
    Up='Up',
    Down='Down',
    Left='Left',
    Right='Right'
}

console.log(DirectionStr)

