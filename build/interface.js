"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
class Macbook {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Macbook Nyala");
    }
    off() {
        console.log("Mackbook Mati");
    }
}
let asus = new Asus("ROG", true);
console.log(asus.on());
console.log(asus.off());
