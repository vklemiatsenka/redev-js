'use strict';

/*  Напишите функцию, которая проверит, является ли строка палиндромом.
(Для того, чтобы решить эту задачу, надо загуглить)
isPalindrome("10101") //true
isPalindrome("Аргентина манит негра") //true
isPalindrome("Авада кедавра") //false
*/

function isPalindrome(str) {
    let newStr = str.toLowerCase()
        .split(' ')
        .join('')
        .split('');
    return newStr.join('') === newStr.reverse().join('');
}

console.log(isPalindrome("Аргентина манит негра"));