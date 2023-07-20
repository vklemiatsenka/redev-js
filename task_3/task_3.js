'use strict';

/*  В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вы должны вернуть самое большое и самое маленькое число.
    list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"); //"-123 666"
    list("-16 12 -100 5 100 12"); //"-100 100"
    list("-1 2 3 4 -6 66 10"); //"-100 100"
*/

function list (str) {
    str = str.split(' ').sort((a, b) => a - b);
    return `${str.shift()} ${str.pop()}`
}
console.log(list("-16 12 -100 5 100 12"));