'use strict';

/*  Напишите функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. Все пробелы в строке должны быть сохранены.
    Например: reverseWords("This is an example!") // "sihT si na !elpmaxe"
*/

function reverseWords(str) {
    return str.split(' ')
        .map(item => item.split('')
            .reverse()
            .join(''))
        .join(' ');
}

console.log(reverseWords('Варкалось, хливкие шорьки пырялись по нове'));