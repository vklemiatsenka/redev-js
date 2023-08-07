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
    if (arr < 2) {
        throw new Error(`Not enough array length`);
    }
    const newArr = arr.join('').toLowerCase().split('').sort();
    const alphabet = 'abcdefjhigklmnopqrstuvwxyz';
    return alphabet.split('').reduce((acc, curr) => {
        if (newArr.includes(curr)) {
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}

console.log(findMissingLetter(['a', 'b', 'd', 'f', 'Q', 'R', 'u']));