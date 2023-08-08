'use strict';

/* Напишите функцию, которая возвращает сумму таким образом:
function currySum(func){
        return
    };
curiedSum(1)(2)(3) // 6
curiedSum(3)(3)(3) //
*/

let multiply = (a, b, c, d, e) => a * b * c * d * e;

const curry = fn => {
    const curried = (...args) => {

        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...args2) => curried(...args, ...args2);
        }
    }
    return curried;
}

const curriedSum = curry(multiply);
console.log(curriedSum(1)(2)(3)(4)(5));