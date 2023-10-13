'use strict';

// task 1
// Создай объект myObject с двумя свойствами - name и age. Используя деструктуризацию, присвой значение свойства name переменной a, а значение свойства age переменной b.

{
    const myObject = {
        name: 'Bilbo',
        age: 111,
    }
    const {name: a, age: b} = myObject;

    console.log(a, b);
}

// task 2
// Создай объект myObject с одним свойством - name. Используя деструктуризацию с установкой значения по умолчанию, присвой значение свойства age переменной b. При этом значение по умолчанию должно быть равно 30.

{
    const myObject = {
        name: 'Thorin',
    }
    const {age: b = 30} = myObject;

    console.log(b);
}

// task 3
// Создай объект myObject с тремя свойствами - name, age и city. Используя деструктуризацию, присвой значения свойств name и age переменным a и b соответственно, а все остальные свойства объекта проигнорируй.

{
    const myObject = {
        name: 'Frodo',
        age: 33,
        city: 'Shire',
    }
    const {name: a, age: b} = myObject;

    console.log(a, b);
}

// task 4
// Создай объект myObject с полями name, age, city и country. Используя деструктуризацию, присвой значения полям name, age и city переменным userName, userAge и userCity соответственно, а поле country присвой переменной userCountry с помощью значения по умолчанию "Belarus".

{
    const myObject = {
        name: 'Sam',
        age: 34,
        city: 'Shire',
        country: 'Middle Earth',
    }
    const {name: userName, age: userAge, city: userCity, country: {userCountry = 'Hobbiton'}} = myObject;

    console.log(userName, userAge, userCity, userCountry);
}