'use strict';

/* Преобразовать массив:
Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, содержащихся в arr.
Управляющие последовательности - это определенные строковые элементы указанного массива:

--discard-next исключает следующий элемент массива из преобразованного массива.
--discard-prev исключает предыдущий элемент массива из преобразованного массива.
--double-next удваивает следующий элемент массива в преобразованном массиве.
--double-prev удваивает предыдущий элемент массива в преобразованном массиве.

Например:
transform([1, 3, '--double-next', 4]) // [1, 3, 4,4];
transform([1, 3, '--discard-prev', 4]) // [1, 4];
transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10, ]) // [1, 3, 4, 4, 4, 8, 10, 10];
*/

function transform(arr) {
    return arr.reduce((acc, item, index) => {
        switch (item) {
            case '--discard-next':
                return acc;
            case '--discard-prev':
                if (!arr[index - 1]) {
                    return acc;
                } else {
                    acc.pop();
                    return acc;
                }
            case '--double-next':
                if (!arr[index + 1]) {
                    return acc;
                } else {
                    acc.push(arr[index + 1]);
                    return acc;
                }
            case '--double-prev':
                if (!arr[index - 1]) {
                    return acc;
                } else {
                    acc.push(acc[index - 1]);
                    return acc;
                }
            default:
                if (arr[index - 1] === '--discard-next') {
                    return acc;
                } else {
                    acc.push(item);
                    return acc;
                }
        }
    }, []);
}

console.log(transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, '--discard-next', 10, '--discard-next', 11, 12, "--double-next"]));