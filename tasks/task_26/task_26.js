'use strict';

/* Напишите функцию startsWith(), которая определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.
'пример строки'.startsWith('пример'); // true
'всё не по чем'.startsWith('чем'); // false
*/

String.prototype.startsWith = function (start) {
    return this.split(' ')[0].toLowerCase() === start.toLowerCase();
}

console.log('варкалось хливкие шорьки'.startsWith('варкалось'));