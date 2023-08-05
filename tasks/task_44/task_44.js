'use strict';

/* Ваша задача написать функцию, которая принимает в качестве параметра целое число и возводит в квадрат каждую цифру числа.
Результат также необходимо вернуть в виде целого числа.
Например:
function squareDigits(num){
    return
};
squareDigits(9119) // 811181
squareDigits(123) // 149
*/

function squareDigits(num) {
    const square = num => num * num;
    return +(`${num}`.split('').map(item => square(item)).join(''));
}

console.log(squareDigits(5678));