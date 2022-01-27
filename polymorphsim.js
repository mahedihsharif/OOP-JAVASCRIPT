class Circle {
    constructor(radius){
        this.radius = radius;
    }
    run(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    run(){
        return this.width * this.height;
    }
}

class Triangle {
    constructor(base, height){
        this.base = base;
        this.height = height;
    }
    run(){
        return 0.5 * this.base * this.height;
    }
}

const shapes =[new Circle(5), new Rectangle(5, 10), new Triangle(8 , 10)];

for(let i = 0; i < shapes.length; i++){
     const shape = shapes[i];
     console.log(shape.run());
}