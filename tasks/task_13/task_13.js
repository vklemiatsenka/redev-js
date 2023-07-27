'use strict';

/*  Напишите функцию, которая принимает число n (n > 0) и возвращает обратную последовательность от n до 1.
Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.
*/

function prevNum(num) {
    if (num <= 0) {
        return `Число должно быть больше 0`;
    }
    return Array(num).fill(num)
        .reduce((accum, item, index) => {
        accum.push(item - index);
        return accum;
    }, [])
        .join(', ');
}

console.log(prevNum(12));