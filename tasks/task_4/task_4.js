'use strict';

/*Ваша задача написать функцию, которая принимает в качестве параметра строку и увеличивает каждую "букву" строки на число позиции, которую она занимает.
function accum(str) {
  return
};
accum("cwAt"); //"C-Ww-Aaa-Tttt"
accum("abc"); //"A-Bb-Ccc"
accum("dog"); //"D-Oo-Ggg"
 */

function accum (str) {
    let array = str.toLowerCase().split('');
    let newArr = [];
    array.forEach((item, index) => {
        let newStr = '';
        for (let i = 0;  i <= index; i++) {
            newStr += item;
            newStr = newStr[0].toUpperCase() + newStr.slice(1);
        }
        newArr.push(newStr);
    });
    return newArr.join('-');
}

console.log(accum('cwAt'));