'use strict';

/*
Напишите функцию isUpperCase(str, character), которая определяет, в каком регистре написан символ строки в указанной позиции.
Если он написан в верхнем регистре - возвращать true, если в нижнем – false.
Например:
isUpperCase('tasks JavaScript', 6); // true
*/

function isUpperCase(str, pos) {
    return str[pos] === str[pos].toUpperCase();
}

console.log(isUpperCase('tasks JavaScript', 6));