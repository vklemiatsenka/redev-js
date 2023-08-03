'use strict';

/* Напишите функцию, которая находит наиболее часто используемый элемент массива.
function find(arr){
    return
};
find([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]) // "z"
find([1, 1, 2, 2, 1, 7, 4, 7, 1, 3, 1, 7, 1, 1]) // 1
*/

function popularItem(arr) {
    let maxFrequency = 0;
    let popularItem;

    arr.forEach(item => {
        const frequency = arr.reduce((acc, current) => {
            return acc + (item === current ? 1 : 0);
        }, 0);

        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            popularItem = item;
        }
    });

    return popularItem;
}

console.log(popularItem([7, 3, 'z', 'z', 5, 5, 5, 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]));