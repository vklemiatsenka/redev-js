'use strict';

/* Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.
function arrayClone(arr) {
    return
};
let vegetables = ['Капуста', 'Репа', 'Редиска'];
let copy = arrayClone(vegetables)
copy // ['Капуста', 'Репа', 'Редиска'];
vegetables // ['Капуста', 'Репа', 'Редиска'];
*/

let arr = ['Капуста', 'Репа', 'Редиска'];

function arrayClone(arr) {
    return Array.isArray(arr) ? arr.concat() : false;
}

console.log(arrayClone(arr));