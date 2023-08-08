'use strict';

/* Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.
function removeDuplicates(arr){
    return
};
removeDuplicates(["php", "php", "css", "css",   "script", "script", "html", "html", "java" ]) // [ "php", "css", "script", "html", "java" ]
removeDuplicates(["a", "a", "b", "c"]) // ["a", "b", "c"]
*/

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(["php", "php", "css", "css", "js", "js", "html", "html", "java"]));