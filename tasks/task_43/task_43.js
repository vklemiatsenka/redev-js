'use strict';

/* Для того, чтобы обеспечить безопасность данных при оплате онлайн, нам необходимо замаскировать все цифры банковского счета, кроме последних четырех.
Ваша задача написать функцию, которая принимает в качестве параметра строку, состоящую из цифр, заменяет все элементы на '#', кроме последних четырех и возвращает ее.
function mask(str){
    return
};
mask('4556364607935616') // '############5616'
*/

function mask(str) {
    return str.split('')
        .reverse()
        .map((item, index) => {
            if (index >= 4) {
                item = '#';
            }
            return item;
        })
        .reverse()
        .join('');
}

console.log(mask('4556364607935616'))