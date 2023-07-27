'use strict';

/*  В данной задаче Вам нужно удалить из одного массива все элементы второго массива.
Например:
arrayDiff([1,2],[1]) ==> [2]
arrayDiff([1,2,2,2,3,4],[2,3]) ==> [1,4]
*/

function arrayDiff(originalArray, deletingArray) {
    return originalArray.filter(item => !deletingArray.includes(item));
    // Альтернативный вариант
    // return originalArray.filter(item => deletingArray.indexOf(item) === -1);
}

console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]));



