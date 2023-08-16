'use strict';

// task 1
// Создать объект с помощью функции-конструктора и добавить ему свойства и методы через прототип.

function Dwarf(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Dwarf.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} ${this.surname}, I'm ${this.age}, I'm from ${this.town}`);
};
Dwarf.prototype.town = 'Erebor';

const dwarf1 = new Dwarf('Thorin', 'Oakshield', 195);

dwarf1.sayHello();


// task 2
// Создать цепочку объектов (3 шт.) с помощью прототипов и вызвать методы из всех объектов в цепочке.

const beLiving = {
    breath: function () {
        console.log(`breathing`);
    },
    blink() {
        console.log(`blinking`);
    }
}

const animal = Object.create(beLiving);
animal.eat = function () {
    console.log(`eating`);
};

const cat = Object.create(animal);
cat.purr = function () {
    console.log(`purring`);
}

const klyaksa = Object.create(cat, {
    begging: {
        value: true,
    },
});

klyaksa.blink();
klyaksa.breath();
klyaksa.purr();
klyaksa.eat();


// task 3
// Что выведет в консоль? Почему?

const obj = {
    a: "AAA",
    __proto__: {
        a: "BBB",
        funcA() {
            return this.a;
        }
    }
}

console.log(obj.funcA());


// task 4
// Что выведет в консоль? Почему?

{
    const obj = {
        a: "AAA",
    }
    obj.__proto__ = {
        a: "BBB",
        funcA() {
            return this.a;
        }
    };

    console.log(obj.funcA());
}


// task 5
// Написать полифил для метода массива .map.

{
    Array.prototype.myMap = function (callback, thisArg) {
        const newArr = [];
        for (let i = 0; i < this.length; i++) {
            newArr.push(callback.call(thisArg, this[i], i, this));
        }
        return newArr;
    }

    const arr = [1, 56, 4, 3, 7, null, undefined];
    console.log(arr.myMap((item, index) => item + index));
}


// task 6
// Написать полифил для метода массива .filter.

{
    Array.prototype.myFilter = function (callback, thisArg) {
        let newArr = [];
        for (let i = 0; i < this.length; i++) {
            const res = callback.call(thisArg, this[i], i, this);
            if (res) {
                newArr.push(this[i]);
            }
        }
        return newArr;
    }

    const arr = [7, 9, 11, 13, 8, 10, 12, 14, undefined, Object, null];
    console.log(arr.myFilter(item => isFinite(item)));
}