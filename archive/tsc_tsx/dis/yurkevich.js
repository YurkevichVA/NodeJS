"use strict";
function sum(left, right) {
    return left + right;
}
console.log(sum(1, 2));
function sum2(left, right) {
    if (left === undefined && right === undefined) {
        throw new Error('Parameter is not a number!');
    }
    else if (left === undefined) {
        return right * right;
    }
    else if (right === undefined) {
        return left * left;
    }
    else {
        return left + right;
    }
}
console.log(sum2(1, 2));
console.log(sum2(2));
console.log(sum2());
function stringToNumber(strings) {
    let numbers = [];
    strings.forEach(str => {
        numbers.push(Number(str));
    });
    return numbers;
}
console.log(stringToNumber(["asdf", "asdf", "sdg"]));
function showFields(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.pet);
}
showFields({ name: "Vova", age: 20, pet: "cat" });
function arrayToSet(arr) {
    let set = new Set(arr);
    return set;
}
console.log(typeof arrayToSet(["asd", "ssdfsd", "asdfsf"]));
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
}
class Square {
    side;
    constructor(side) {
        this.side = side;
    }
}
class Triangle {
    base;
    height;
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
}
class Area {
    getArea = (figure) => {
        if (typeof figure === Circle.toString()) {
            return figure.radius * figure.radius * 3.14;
        }
        else if (typeof figure === Square.toString()) {
            return figure.side * figure.side;
        }
        else {
            return figure.base * figure.height * 0.5;
        }
    };
}
const area = new Area();
console.log(area.getArea(new Circle(2)));
console.log(area.getArea(new Square(2)));
console.log(area.getArea(new Triangle(2, 2)));
let a = 10;
let arr1;
let arr2;
let arr3;
const f = (x) => {
    return 2;
};
const f2 = (id) => {
};
let k1;
let k2;
let arr;
const f3 = (x) => {
};
f3(1);
f3("1");
class A {
    price;
    constructor(price) {
        this.price = price;
    }
}
const f4 = (obj) => {
    obj.price;
};
console.log("d");
console.log("asdfsa");
