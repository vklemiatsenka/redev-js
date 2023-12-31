'use strict';

/*  Ваша задача - посчитать спрятанных на заднем дворе кошек (представленных в двухмерном формате Array)
 Кошки хорошо прячутся, но их уши ('^^') видны. Ваша задача написать функцию (countCats), которая будет считать кошек. Удачи!
 Количество найденых кошек должны быть number. Если кошек не найдено, функция должна вернуть 0.
 Пример: countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]) //3
*/

function countCats(arr) {
    return arr.flat(Infinity).reduce((acc, item) => {
        item === '^^' ? acc++ : acc;
        return acc;
    }, 0);
    //Альтернативный вариант
    //return arr.flat(Infinity).filter(item => item === '^^').length;
}

console.log(countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]));