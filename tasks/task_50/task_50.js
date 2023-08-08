'use strict';

/* Напишите функцию, которая принимает массив и переносит все 0 в конец, не изменяя порядок остальных элементов массива.
function moveZeros(array){
    return
};
moveZeros([false,1,0,1,2,0,1,3,'a']) // [false,1,1,2,1,3,'a',0,0]
moveZeros(['a',0,'b',0,'d']) // ['a','b','d',0,0]
*/

function moveZeros(arr) {
    const newArr = arr;
    return newArr.concat(newArr.reduce((acc, item, index) => {
        if (item === 0) {
            acc.push(item);
            arr.splice(index, 1);
            return acc;
        }
        return acc;
    }, []));
}

console.log(moveZeros(['a', 0, 'b', 0, 'd']));