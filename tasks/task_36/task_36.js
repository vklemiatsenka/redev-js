'use strict';

/* Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.
function colonOdd(num) {
    return
};
colonOdd(55639217)// "5:563:921:7"
colonOdd(13565484647897518)// "1:3:56548464789:7:5:18
*/

function colonOdd(num) {
    const arr = `${num}`.split('');
    return arr.reduce((acc, item, index) => {
        acc.push(item);
        if (item % 2 === 1 && arr[index + 1] % 2 === 1) {
            acc.push(':');
        }
        return acc;
    }, [])
        .join('');
}

console.log(colonOdd(13565484647897518));