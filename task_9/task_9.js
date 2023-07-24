'use strict';

/* Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
*/

function simple(str) {
    const arr = str.split(' ');
    let total = arr.reduce((acc, current) => {
        acc = Math.min(acc, current.length);
        return acc;
    }, arr[0].length);
    return total;
}

console.log(simple('Варкалось, хливкие шорьки пырялись по нове и хрюкотали зелюки как мюмзики в мове'));