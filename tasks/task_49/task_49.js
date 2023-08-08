'use strict';

/* Найдите недостающую букву.
Напишите функцию, которая принимает в качестве параметра массив букв, расположенных по алфавиту и возвращает массив с недостающей буквой.
Длина входного массива не меньше 2 и он содержит буквы только одного регистра.
Например:
function findMissingLetter(array){
    return
};
findMissingLetter(['a','b','c','d','f']) // 'e'
findMissingLetter(['a','b','d']) // 'c'
*/

function findMissingLetter(arr) {
    if (arr.length < 2) {
        throw new Error(`Not enough array length`);
    }
    const conv = arr.map(item => item.charCodeAt(0));
    const res = conv.find((item, index) => {
        return item !== conv[0] + index;
    });
    return res !== undefined ? [String.fromCharCode(res - 1)] : [];
}

console.log(findMissingLetter(['x', 'z']));