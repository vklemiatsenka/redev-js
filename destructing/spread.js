'use strict';

// task 1
// Напиши функцию, которая принимает два массива и объединяет их. Затем отсортируй полученный массив и верни его.

function concat(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(concat([1, 2, 3, 4, 5,], [7, 9, 8, 6, 10,]));

// task 2
// Напиши функцию, которая принимает массив чисел и возвращает максимальное число в этом массиве. Используй оператор spread для передачи массива в Math.max().

function maxNumber(arr) {
    return Math.max(...arr);
}

console.log(maxNumber([7, 8, 3, 5, 2]));

// task 3
// Напиши функцию, которая принимает произвольное количество аргументов и возвращает массив, содержащий эти аргументы.

function returnArray(...args) {
    return args;
}

console.log(returnArray(3, 5, 6, 8, 'dfg', undefined));

// task 4
// Напиши функцию, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов. Если свойства с одинаковыми ключами присутствуют в обоих объектах, используй значение свойства из первого объекта.

function concatObjects(obj1, obj2) {
    return {...obj2, ...obj1};
}

const obj1 = {
    name: 'Volha',
    age: 32,
    city: 'Gdansk',
}

const obj2 = {
    name: 'Pavel',
    age: 33,
    country: 'Poland',
}

console.log(concatObjects(obj1, obj2));

// task 5
// Напиши функцию, которая принимает массив и возвращает новый массив с уникальными значениями из первого массива.

function uniqArray(arr) {
    return {...arr, age: 33};
}

const obj = {
    name: 'Volha',
    age: 32,
}

console.log(uniqArray(obj));