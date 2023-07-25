'use strict';

/*  Напишите функцию, которая принимает число n (n > 0) и возвращает обратную последовательность от n до 1.
Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.
*/

function prevNum(num) {
    let total = '';
    if (num <= 0) {
        return `Число должно быть больше 0`;
    }
    for (let i = num; i !== 0; i--) {
        total += i;
        if (i > 1) {
            total += ', '
        }
    }
    return total;
}

console.log(prevNum(18));