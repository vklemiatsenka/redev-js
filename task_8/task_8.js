'use strict';

/*Напишите функцию, которая возвращает минимальное и максимальное значение заданного массива.
compare([1, 5, 8, 10, 35, 100, 333, -123, -2, 243]) // [-123, 333]
*/

function compare(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    const result = arr.reduce((acc, current) => {
        acc[0] = Math.min(acc[0], current);
        acc[1] = Math.max(acc[1], current);
        return acc;
    }, [arr[0], arr[0]]);

    return result;
}

console.log(compare([1, 5, 8, 10, 35, 100, 333, -123, -2, 243]));