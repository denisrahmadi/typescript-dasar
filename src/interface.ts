interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("Nyala");
    }
    off(): void {
        console.log("Mati");
    }
}

class Macbook implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("Macbook Nyala");
    }
    off(): void {
        console.log("Mackbook Mati");
    }
}

let asus = new Asus("ROG", true);
console.log(asus.on());
console.log(asus.off());
