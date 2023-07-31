'use strict';

/* Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.
function expand(arr){
    return
};
expand([1, [2,[3,[4]]]]) // "1,2,3,4"
expand([1, [2], [3, [[4]]],[5,6]]) // "1,2,3,4,5,6"
*/

function expand(arr) {
    return arr.flat(Infinity);
}

console.log(expand([1, [2], [3, [[4]]],[5,6]]));