'use strict';

/* Напишите функцию capitalizeFirstLetter(str), которая преобразовывает первый символ строки в верхний регистр.
Например:
capitalizeFirstLetter('пример строки'); // Пример строки
*/

function capitalizeFirstLetter (str) {
    let newStr = str.split('');
    return newStr[0].toUpperCase() + newStr.slice(1).join('');
    // return str[0].toUpperCase() + str.slice(1); Альтернативный вариант
}

console.log(capitalizeFirstLetter('варкалось, хливкие шорьки'));