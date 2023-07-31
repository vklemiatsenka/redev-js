'use strict';

/* Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str) {
    return
};
strip("    Pasha is  a   good   boy"); // "Pasha is a good boy"
*/

function strip(str) {
    return str.split(' ').filter(Boolean).join(' ');
}

console.log(strip("    Pasha is  a   good   boy"));