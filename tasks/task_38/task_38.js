'use strict';

/* Напишите функцию с двумя параметрами, которая создаёт массив элементов, представляющих собой сумму соответствующих элементов заданных массивов.
function func(arr1,arr2){
    return
};
func([1, 2, 3], [2, 1]) // [3, 3, 3]
func([5, 2, 1], [2, 1, 3, 4]) // [7, 3, 4, 4]
*/

function sumArr(arr1, arr2) {
    const maxArray = Math.max(arr1.length, arr2.length);
    return Array.from({length: maxArray}, (_, i) => (arr1[i] || 0) + (arr2[i] || 0));
}

// Альтернативный вариант
// function sumArr(arr1, arr2) {
//     const maxArray = arr1.length > arr2.length ? arr1 : arr2;
//     return maxArray.map((item, index) => (arr1[index] && arr2[index]) ? arr1[index] + arr2[index] : item);
// }

console.log(sumArr([5, 2, 1, 6, 7, 8,], [2, 1, 3, 4]));