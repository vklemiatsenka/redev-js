'use strict';

// task 1
// Напиши функцию countWords(str), которая принимает на вход строку и возвращает объект Map, в котором ключами являются слова из строки, а значениями - количество их вхождений в строку.
// Например, для строки "Я люблю маму, а так же я люблю JavaScript" функция должна вернуть Map со следующими парами ключ-значение: "Я" -> 2, "люблю" -> 2, "маму" -> 1, и т.д.

function countWords(str) {
    return str.toLowerCase()
        .split(' ')
        .reduce((acc, curr) => {
            if (acc.has(curr)) {
                let counter = acc.get(curr);
                acc.set(curr, counter + 1);
                return acc;
            }
            acc.set(curr, 1);
            return acc;
        }, new Map());
}

console.log(countWords("Я люблю маму, а так же я люблю JavaScript"));

// task 2
// Напиши функцию, которая принимает на вход массив и возвращает новый массив, содержащий только уникальные элементы исходного массива, используя коллекцию Set.

function uniq(arr) {
    return new Set(arr);
}

function sum(a, b) {
    return a + b;
}

const person = {
    name: 'Volha',
    age: 33,
}

const bla = ['name', 'Volha', 'age', 33, 'city', 'Gdansk', sum, undefined, 'name', 'Pavel', 'age', 32, 'city', 'Gdansk', sum, null, {name: 'Volha'}, [], {name: 'Volha'}, person, person];

console.log(uniq(bla));