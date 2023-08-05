'use strict';

/* Что такое анаграмма?
Два слова являются анаграммами между собой, если они оба содержат одинаковые буквы.
Например: 'abba' & 'baab' == true
Напишите функцию, которая находит все анаграммы слова из списка. В качестве параметра даны слово и массив слов.
Функция должна возвращать массив всех анаграмм или пустой массив, если анаграмм не обнаружено.
Например:
function anagrams(str, array){
    return
};
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // ['aabb', 'bbaa']
anagrams('cat', ['tac', 'cta', 'act', 'dada']) // [ 'tac', 'cta', 'act' ]
*/

function anagram(str, arr) {
    const converter = str => str.split('').sort().join('')
    return arr.filter(item => converter(item) === converter(str));
}

console.log(anagram('abba', ['aabb', 'abcd', 'bbaa', 'dada']));