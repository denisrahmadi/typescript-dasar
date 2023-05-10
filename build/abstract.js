"use strict";
/**
    - abstract class adalah sebuah class yang tidak bisa diistansiasi langsung dari luar class itu sendiri melainkan harus mengextends sebuah class childnya
**/
class Vehicle {
    start() {
        console.log("Ngenggggggggg");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.start();
