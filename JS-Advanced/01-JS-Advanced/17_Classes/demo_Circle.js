class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius; 
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw new TypeError('Radius must be a number');
        }
        this._radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Diameter must be a number');
        }
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

module.exports= Circle;

const c = new Circle(4);

console.log('Instance', c);
console.log('Radius', c.radius);

console.log('Diameter', c.diameter);
console.log('Area', c.area);

c.radius = 6;

console.log('Diameter', c.diameter);
console.log('Area', c.area);

c.diameter = 5;

console.log(c);

c._radius = 'aha';
console.log(c);