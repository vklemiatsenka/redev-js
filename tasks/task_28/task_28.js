'use strict';

/* Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.
    function removeDuplicate(str) {
    return
};
removeDuplicate("вишня, груша, слива, груша"); // "вишня, груша, слива"
removeDuplicate("redev, redev, str"); // "redev, str"
*/

function removeDuplicate(str) {
    return str.split(', ')
        .reduce((acc, item) => {
            if (!acc.includes(item)) {
                acc.push(item);
                return acc;
            } else {
                return acc;
            }
        }, [])
        .join(', ');
}

console.log(removeDuplicate('вишня, груша, слива, груша'));