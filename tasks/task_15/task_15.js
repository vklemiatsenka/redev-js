'use strict';

/*  Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.
 Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0).
 Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только последовательные числа.
 Например: is2 Thi1s T4est 3a -> Thi1s is2 3a T4est
*/

function sortedStr(str) {
    if (str.length === 0) {
        return '';
    } else {
        const arr = str.split(' ');
        function getFind(strI) {
            return strI.split('').find(item => isFinite(item));
        }
        return arr.sort((a, b) => getFind(a) - getFind(b)).join(' ');
    }
}

console.log(sortedStr('is2 Thi1s T4est 3a'));