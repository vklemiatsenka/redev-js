'use strict';

/* Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.*/

function deleteVowels (str) {
    const vowels = {
        'а': true,
        'е': true,
        'ё': true,
        'и': true,
        'о': true,
        'у': true,
        'ы': true,
        'э': true,
        'ю': true,
        'я': true,
        'А': true,
        'Е': true,
        'Ё': true,
        'И': true,
        'О': true,
        'У': true,
        'Ы': true,
        'Э': true,
        'Ю': true,
        'Я': true,
    }
    let newStr = '';
    str.split('').forEach(item => {
        if (!(item in vowels)) {
            newStr += item;
        }
    });
    return newStr;
}
console.log(deleteVowels('Ваш новый сериал полный отстой!'));
