'use strict';

// task 1
// Напиши функцию, которая принимает на вход JSON-строку с объектом и возвращает количество свойств в объекте.
{
    const person = {
        name: 'Thorin',
        surname: 'Oakshield',
        age: 195,
        isAdmin: true,
        hobbies: ['killing orcs', 'blacksmithing'],
        nephews: {
            1: {
                name: 'Fili',
                age: 82,
            },
            2: {
                name: 'Kili',
                age: 88,
            }
        }
    };

    const json = JSON.stringify(person);

    function propertiesAmount(json) {
        return Object.keys(JSON.parse(json)).length;
    }

    console.log(propertiesAmount(json));
}

// task 2
// Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о студентах (имя, возраст), и возвращает массив их имен.

{
    const students = [
        {name: "Pasha", age: 25},
        {name: "Sasha", age: 30},
        {name: "Masha", age: 27}
    ];

    const json = JSON.stringify(students);

    const studNames = json => {
        return JSON.parse(json).map(item => item.name);
    }
    console.log(studNames(json));
}

// task 3
// Создай объект в формате JSON, который содержит информацию о погоде в твоем городе на следующие 5 дней. Каждый день должен содержать информацию о температуре, влажности и скорости ветра.

{
    const weatherGdansk = [
        {day: 12, month: 'august', temperature: 26, humidity: 55, wind: 14,},
        {day: 13, month: 'august', temperature: 26, humidity: 59, wind: 18,},
        {day: 14, month: 'august', temperature: 28, humidity: 49, wind: 7,},
        {day: 15, month: 'august', temperature: 32, humidity: 46, wind: 18,},
        {day: 16, month: 'august', temperature: 24, humidity: 78, wind: 18,},
    ];
    const json = JSON.stringify(weatherGdansk);
    console.log(JSON.parse(json));
}

// task 4
// Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о пользователях социальной сети, и возвращает только имена пользователей, у которых более 1000 подписчиков.

{
    const users = [
        {name: "Pasha", followers: 777},
        {name: "Sasha", followers: 1085},
        {name: "Masha", followers: 11435},
        {name: "Kasha", followers: 3}
    ];

    const json = JSON.stringify(users);

    const vipAcc = json => {
        return JSON.parse(json).filter(item => item.followers > 1000);
    }

    console.log(vipAcc(json));
}

// task 5
// Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о пользователях социальной сети, и возвращает массив пользователей, с увеличенным количеством подписчиков на 5000 у каждого.

{
    const users = [
        {name: "Pasha", followers: 5777},
        {name: "Sasha", followers: 6085},
        {name: "Masha", followers: 16435},
        {name: "Kasha", followers: 5003}
    ];

    const json = JSON.stringify(users);

    const addFollowers = json => {
        return JSON.parse(json).map(item => ({
            name: item.name,
            followers: item.followers + 5000,
        }));
    }

    console.log(addFollowers(json));
}