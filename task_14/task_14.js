'use strict';

/*  Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
учитывая массив из минимум 4 положительных чисел.
*/

function sumMin(array) {
    let arr = array.filter(item => isFinite(item) && item > 0 && typeof item !== 'boolean');
    console.log(arr);
    if (arr.length < 4) {
        return 'Мало положительных чисел!';
    } else {
        arr.sort((a, b) => a - b);
        return arr[0] + arr[1];
    }
}

console.log(sumMin([2, 52, -4, 56, 11, true, false, [2, 4], {'a': 11}, null, undefined, 'hello', 34, 1, 3]));