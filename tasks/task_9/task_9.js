'use strict';

/* Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
*/

function simple(str) {
    const arr = str.split(' ');
    return  arr.reduce((acc, current) => {
        acc = Math.min(acc, current.length);
        return acc;
    }, arr[0].length);
}

console.log(simple('Варкалось, хливкие шорьки пырялись по нове и хрюкотали зелюки как мюмзики в мове'));