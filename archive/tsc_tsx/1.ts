let a: number | boolean = 10;

let arr1: (number | string)[];
let arr2: Array<number | string>;

//tuple
let arr3: [number, string];

const f = (x?: number) => {
    return 2;
}

type Id = boolean | number;

const f2 = (id: Id) => {

};

// Generic

type Kitty<Age> = {
    name: string;
    age: Age;
};

let k1: Kitty<null>;
let k2: Kitty<number>;

let arr: Array<string>;

const f3 = <T = number>(x: T) => {

}

f3<number>(1);
f3("1");

class A {
    price: number;
    constructor(price:number) {
        this.price = price;
    }
}

const f4 = (obj: A) => {
    obj.price;
}

// typescript @types/node

// "build:ts": "tsc 1.ts"

console.log("d");
console.log("asdfsa");

// "build:ts": "tsc --watch",
// "tsx": "tsx watch 1.ts"


