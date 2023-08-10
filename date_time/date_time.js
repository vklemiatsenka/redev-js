'use strict';

// task 1
// Напиши функцию, которая будет принимать на вход дату и время и возвращать ближайшее время в формате "ЧЧ:ММ", кратное 5 минутам. Например, если на вход подано "17.03.2023 12:13", то функция должна вернуть "12:10".

function nearestTime(date) {
    const hour = date.getHours();
    let minutes = date.getMinutes();
    while (minutes % 5 !== 0) {
        minutes--;
    }
    return `${hour}:${minutes}`;
}

console.log(nearestTime(new Date()));

// task 2
// Напиши функцию, которая будет принимать на вход две даты и возвращать разницу между ними в днях.

function differenceDate(date1, date2) {
    return Math.abs(Math.round((date1 - date2) / (1000 * 60 * 60 * 24)));
}

const date1 = new Date();
const date2 = new Date(2023, 1, 28, 3, 0, 0);

console.log(differenceDate(date1, date2));

// task 3
// Напиши функцию, которая будет принимать на вход дату в формате "ММ/ДД/ГГГГ" или "ГГГГ/ММ/ДД" и возвращать ее представление в формате "ДД.ММ.ГГГГ".

function convertDate(date) {
    return date.split('/').join('.');
}

console.log(convertDate('22/11/1990'));

// task 4
// Напиши функцию, которая будет принимать на вход дату и время и возвращать строку, содержащую информацию о том, сколько времени прошло с момента заданной даты до текущего момента. Например, "2 дня назад", "3 часа назад", "10 минут назад" и т.д.

function itWas(date) {
    const now = new Date();
    const diff = now - date;
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    if (diff > minute && diff < hour) {
        return `${Math.round(diff / minute)} minutes ago`;
    } else if (diff > hour && diff < day) {
        return `${Math.round(diff / hour)} hours ago`;
    } else if (diff > day && diff < month) {
        return `${Math.round(diff / day)} days ago`;
    } else if (diff > month && diff < year) {
        return `${Math.round(diff / month)} month ago`;
    } else {
        return `${Math.round(diff / year)} years ago`;
    }
}

const date = new Date(2023, 7, 10, 14, 0, 0);

console.log(itWas(date));