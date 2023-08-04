'use strict';

/* Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов.
Функцию реализовать как принимающую переменное число аргументов.
function theSame(arr){
    return
};
theSame(['кот', 'ток', 'кто']) // true
theSame(['кот', 'тк', 'кто']) // false
*/

function sameLetters(arr) {
    if (arr.every(item => (item.length === arr[0].length)) === true) {
        const sorted = word => word.split('').sort().join('');
        return arr.every(item => sorted(item) === sorted(arr[0]));
    }
    return false;
}

console.log(sameLetters(['кот', 'ток', 'кто', 'отк', 'кот', 'кря']));