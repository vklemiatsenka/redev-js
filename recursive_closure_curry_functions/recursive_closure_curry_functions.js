'use strict';

// task 1
// Замыкание. Напиши функцию, которая принимает на вход число, а затем возвращает другую функцию, которая при каждом вызове будет возвращать сумму переданного числа и того, что передано при первом вызове.

function sum(prevNum) {
    return function (nextNum) {
        return prevNum + nextNum;
    }
}

console.log(sum(23)(45));

const sum23 = sum(23);
console.log(sum23(45));


// task 2
// Замыкание. Напиши функцию, которая принимает на вход число, и возвращает факториал.

function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}

console.log(factorial(5));


// task 3
// Замыкание. Напиши функцию, которая принимает на язык, а затем возвращает другую функцию, которая при каждом вызове будет возвращать приветствие на том языке, котрый был введен изначально.

function greetings(language) {
    return function (firstName, lastName) {
        switch (language) {
            case 'en':
                return `Hello, ${firstName} ${lastName}!`;
            case 'fr':
                return `Bonjour, ${firstName} ${lastName}!`;
            case 'de':
                return `Halo, ${firstName} ${lastName}!`;
            case 'pl':
                return `Cześć, ${firstName} ${lastName}!`;
        }
    }
}

const greetEnglish = greetings('en');
const greetGerman = greetings('de');

console.log(greetEnglish('John', 'Doe'));
console.log(greetGerman('John', 'Doe'));


// task 4
// Задание на рекурсию: Напиши рекурсивную функцию, которая принимает на вход массив чисел и возвращает сумму всех элементов в этом массиве.

function sumArrayItems(arr) {
    const array = [...arr];
    if (array.length === 0) {
        return 0;
    } else {
        return array.pop() + sumArrayItems(array);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumArrayItems(array));