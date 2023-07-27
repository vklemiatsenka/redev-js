'use strict';

/* Ваша задача - создать объект chainMaker, который создает цепочки. Готовая цепочка представляет собой строку и выглядит так: '(значение1) (значение2) (значение3)'.
ChainMaker есть несколько методов для создания цепочек и их изменения:

getLength возвращает текущую длину цепочки в виде числа;
addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
removeLink (position) удаляет звено цепи в указанной позиции;
reverseChain переворачивает цепочку;
finishChain завершает цепочку и возвращает ее.
Методы addLink, reverseChain и removeLink объединяются в цепочку, а другие - нет. Если addLink вызывается без аргументов, он добавляет в цепочку пустую ссылку ('()').
Если removeLink принимает недопустимую позицию (например, не число или дробное число, или соответствует несуществующей ссылке), он должен выдать ошибку.
После вызова метода finishChain существующую цепочку необходимо удалить, как если бы возникла ошибка.
Например:
const chainMaker = {}
chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '(1)~~(2)~~(3)'
chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '(2)~~(3)'
chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '(2)~~(1)~~(3)'
*/

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(num) {
        if (!isFinite(num) || num < 1 || typeof num === 'boolean') {
            this.chain.push(`()`);
        } else if (num) {
            this.chain.push(`(${num})`);
        }
        return this;
    },
    removeLink(position) {
        if (!isFinite(position) || position < 1 || position > this.chain.length) {
            throw new Error('Invalid position for removing link.');
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const result = this.chain.join('~~');
        this.chain = [];
        return result;
    },
}

console.log(chainMaker.addLink(1).addLink().addLink(3).finishChain());