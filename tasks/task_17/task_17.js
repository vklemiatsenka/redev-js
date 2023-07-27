'use strict';

/*  Напишите функцию, которая переделывает строку из camelCase в snake_case.
    Например: toSnakeCase("redevCourses") // "redev_courses"
*/

function toSnakeCase(str) {
    return str.split('')
        .map(item => item === item.toUpperCase() ? '_' + item.toLowerCase() : item)
        .join('');
}

console.log(toSnakeCase('redevCourses'));