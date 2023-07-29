'use strict';

/* Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.
removeDuplicate("anaconda"); // "ancod"
removeDuplicate("redev"); // "redv"
*/

function removeDuplicate(str) {
    const arr = str.split('');
    return arr.filter((item, index) => arr.indexOf(item) === index).join('');
}

console.log(removeDuplicate('тилимилитрямдия'));