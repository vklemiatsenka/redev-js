'use strict';

/* Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет, заканчивается ли строка символами подстроки.
String.prototype.endsWith = function(substring) {
    return
};
let str = "Каждый охотник желает знать";
str.endsWith("желает"); // false
str.endsWith("охотник"); // false
str.endsWith("знать"); // true
*/

String.prototype.endsWith = function (substring) {
    return this.split(' ').slice(-1).join() === substring;
}

console.log('Варкалось, хливкие шорьки пырялись по нове'.endsWith('нове'));