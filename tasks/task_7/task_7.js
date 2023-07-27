'use strict';

/* Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Малыш каратэ» (2010) и «После Земли» (2013). Джейден также известен своей философией, которой он делится в Twitter. Когда он пишет посты в Твиттере, он пишет каждое слово с заглавной буквы. Посмотрите на приведенный ниже пример.
Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются реальными цитатами из Jaden Smith, но они не написаны с большой буквы так, как он их первоначально напечатал.
toJadenCase('The world is not what we think it is') --> 'The World Is Not What We Think It Is'
*/

String.prototype.toJadenCase = function () {
    let arr = this.split(' ');
    let newArr = arr.map(item => item[0].toUpperCase() + item.slice(1));
    return newArr.join(' ');
}

console.log('The world is not what we think it is'.toJadenCase());