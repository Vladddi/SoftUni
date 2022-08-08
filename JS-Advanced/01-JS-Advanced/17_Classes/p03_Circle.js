class Circle {
    constructor (r) {
        this.radius = r;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
    
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

const circle = new Circle(5);
console.log(circle.area); //78.5398..