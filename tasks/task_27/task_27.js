'use strict';

/* Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.
let str = 'abc def def lom abc abc def';
replaceAll('abc', 'x', str); // x def def lom x x def
replaceAll('abc', 'redev', str); // redev def def lom redev redev def
*/

function replaceAll(find, replace, str) {
    return str.split(' ').map(item => item === find ? replace : item).join(' ');
}

console.log(replaceAll('abc', 'x', 'abc def def lom abc abc def'));