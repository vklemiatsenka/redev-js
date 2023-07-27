'use strict';

/* Вы можете найти иголку в стоге сена?
Напишите функцию findNeedle, которая принимает массив, полный мусора, но содержащий одну иголку.
После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое говорит: 'Нашел иголку на позиции' плюс индекс, по которому была найдена иголка.
Например: findNeedle(['bla', 'wekmvever', 'needle', 'bntyn', 'qwd', 'qfverv', 'rtbrtb']);
Должна быть возвращена следующая строка: «Нашел иголку на позиции 2».
*/

function findNeedle(arr) {
    let position = arr.findIndex(item => item === 'needle');
    if (position > 0) {
        return `Нашел иголку на позиции ${position}`;
    } else {
        return `Иголки нет`;
    }
}

console.log(findNeedle(['bla', 'wekmvever', 'bntyn', 'qwd', 'qfverv', 'rtbrtb', 'needle']));

