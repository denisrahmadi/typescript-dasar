/**
    - abstract class adalah sebuah class yang tidak bisa diistansiasi langsung dari luar class itu sendiri melainkan harus mengextends sebuah class childnya
**/

abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("Ngenggggggggg");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motorcycle extends Vehicle {
    wheels: number = 2
}

let car = new Car();
console.log(car.wheels);
car.start();

let motorcycle = new Motorcycle()
console.log(motorcycle.wheels);
motorcycle.start()

