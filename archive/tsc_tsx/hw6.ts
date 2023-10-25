class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

class Square {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
}

class Triangle {
    base: number;
    height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
}

type Figure = Circle | Square | Triangle;

class Area {
    getArea = (figure: Circle | Square | Triangle):number => {
        if(typeof figure === Circle.toString()) {
            return (figure as Circle).radius * (figure as Circle).radius * 3.14;
        } else if(typeof figure === Square.toString()) {
            return (figure as Square).side * (figure as Square).side;
        } else {
            return (figure as Triangle).base * (figure as Triangle).height * 0.5;
        }
    }
}

const area: Area = new Area();

console.log(area.getArea(new Circle(2)));
console.log(area.getArea(new Square(2)));
console.log(area.getArea(new Triangle(2, 2)));