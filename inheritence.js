class SmartDevice{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
}

class Phone extends SmartDevice{
    constructor(brand, price, camera){
        super(brand, price);
        this.camera = camera;
         
    }
}

class Watch extends Phone{
    constructor(brand, price, camera, category){
        super(brand, price, camera)
        this.category = category;
    }
}

// class Laptop{
//     constructor(brand, price, capacity){
//         this.brand = brand;
//         this.price = price;
//         this.capacity = capacity;
//     }
// }

const wat= new Watch('MI', 3000, '3GB', 'sub-category');
console.log(wat)