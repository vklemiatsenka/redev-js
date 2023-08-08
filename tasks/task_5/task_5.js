'use strict';

/* Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
Если функции передана правильная строка PIN, верните true, иначе верните false.
*/

/* Вариант решения 1:
function correctPin(str) {
    return isFinite(str) && str.length === 6 || isFinite(str) && str.length === 4;
}
*/

function correctPin(str) {
    let arr = [];
    let newArr = str.split('');
    if (newArr.length === 4 || newArr.length === 6) {
        arr = newArr.map(item => isFinite(item));
    } else {
        return false
    }
    return arr.every(item => item === true);
}