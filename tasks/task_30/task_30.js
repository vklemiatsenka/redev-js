'use strict';

/* Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.
alphabetize("Europe"); // "eEopru"
alphabetize("redev"); // "deerv"
*/

function alphabetize(str) {
    return str.split('').sort().join('');
}

console.log(alphabetize('Europe'));