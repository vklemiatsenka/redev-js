'use strict';

/* Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
    return
};
comparison("STrinG", "string"); // true
comparison("ALfA", "alpha"); // false
*/

function comparison(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison("STrinG", "string"));