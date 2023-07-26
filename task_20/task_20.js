'use strict';

// Напишите функцию, которая находит факториал 5.

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));