'use strict';

/* Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n) {
    return
};
let str = "Сила тяжести приложена к центру масс тела";
cutString(str, 5); // "Сила тяжести приложена к центру"
cutString(str, 1); // "Сила"
*/

function returnStr(str, pos) {
    return str.split(' ').slice(0, pos).join(' ');
}

console.log(returnStr('Варкалось, хливкие шорьки пырялись по нове и хрюкотали зелюки как мюмзики в мове', 6));