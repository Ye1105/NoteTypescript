/*
 * @Author: 15868707168@163.com 15868707168@163.com
 * @Date: 2022-09-07 15:31:19
 * @LastEditors: 15868707168@163.com 15868707168@163.com
 * @LastEditTime: 2022-09-07 17:04:02
 * @FilePath: \TS_PROJECT\13_enum.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
var changeDirection = function (direction) { };
changeDirection(Direction.Down);
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "Up";
    DirectionStr["Down"] = "Down";
    DirectionStr["Left"] = "Left";
    DirectionStr["Right"] = "Right";
})(DirectionStr || (DirectionStr = {}));
