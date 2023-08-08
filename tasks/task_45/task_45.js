'use strict';

/* Даны две строки, которые содержат только буквы от a - z. Ваша задача написать функцию, которая возвращает новую отсортированную (по порядку) строку, которая содержит буквы двух строк, повторяющихся только один раз.
function longest(str1, str2){
    return
};
longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq') // 'abcdefklmopqxy'
longest('qwdqqwdqwdwqe', 'qwwwacsfdsf') // 'acdefqsw'
*/

function theOneRepeat(str1, str2) {
    const [arr1, arr2] = [str1.split(''), str2.split('')];
    const uniqChecker = arr => {
        return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
    }
    return uniqChecker(arr1).concat(uniqChecker(arr2))
        .sort()
        .join('');
}

console.log(theOneRepeat('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));