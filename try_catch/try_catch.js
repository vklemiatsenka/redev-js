'use strict';

// task 1
// Напиши функцию, которая принимает на вход два числа и возвращает их сумму. В случае, если аргументы не являются числами, функция должна бросать исключение.
// Добавила проверку на наличие обоих аргументов.

{
    const sum = (a, b) => {
        if (a && b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw `Numbers only!`;
            }
            return a + b;
        }
        throw `Enter two arguments!`;
    }

    try {
        let result = sum(3, 4);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

// task 2
// Напиши функцию, которая принимает на вход массив чисел и возвращает среднее арифметическое. В случае, если массив пустой, функция должна бросать исключение.
// Добавила проверки на: массив, на тип данных 'number', на корректность отметки

const ratingCalculator = arr => {
    if (!Array.isArray(arr)) {
        throw 'Only array enter';
    } else if (arr.length === 0) {
        throw `Add several numbers, array can't be empty`;
    } else if (arr.some(mark => typeof mark !== 'number')) {
        throw `Marks can't be not a numbers`;
    } else if (arr.some(mark => mark < 0 || mark > 100)) {
        throw `Marks can't be less than 0 and more than 100`;
    }
    const result = arr.reduce((score, mark) => score + mark, 0);
    return result / arr.length;
}

try {
    const rating = ratingCalculator([1, 4, 6, 8, 90]);
    console.log(rating);
} catch (error) {
    console.error(error);
}

// task 3
// Напиши функцию, которая принимает на вход объект со свойствами x и y и возвращает их сумму. В случае, если объект не содержит полей x и y, функция должна бросать исключение.
// Добавила проверку на тип данных

const sum = obj => {
    if (!obj.x || !obj.y) {
        throw 'There is no x or y parameters';
    } else if (typeof +obj.x !== 'number' || typeof +obj.y !== 'number') {
        throw 'X or y can be only numbers';
    }
    return +obj.x + +obj.y;
}

try {
    const result = sum({y: 7, x: '-45'});
    console.log(result);
} catch (error) {
    console.error(error);
}

// task 4
// Напиши функцию, которая принимает на вход строку и возвращает ее длину. В случае, если аргумент не является строкой, функция должна бросать исключение.

const isString = string => {
    if (typeof string !== 'string') {
        throw 'Argument can be only string';
    }
    return string.length;
}

try {
    const result = isString('Варкалось, хливкие шорьки пыялись по нове');
    console.log(result);
} catch (error) {
    console.error(error);
}

// task 5
// Напиши функцию, которая принимает на вход число и возвращает его факториал. В случае, если аргумент не является положительным целым числом, функция должна бросать исключение.

const factorial = number => {
    if (number % 1 !== 0) {
        throw `Number can be only integer number`;
    } else if (number < 0) {
        throw `Number can be only positive`;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

try {
    const result = factorial(6);
    console.log(result);
} catch (error) {
    console.error(error);
}