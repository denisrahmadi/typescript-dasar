"use strict";
/*
    - di javascript ga ada class adanya prototype
    - jadi ketika buat class di typescript nanti dicompile jadi prototype
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// CLASS
/*
    -public = bisa diakses disemua class / dari luar kelas
    -protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
    -private = hanya bisa diakses dari class itu sendiri
    -dari pada dibikin kayak gini mending disingkat aja kayak yg dibawah

    export class User {
        public name: string

        constructor(name: string) {
            this.name = name
    }
}
*/
// export class User {
//     constructor(public name: string) {
//     }
// }
// let user = new User("Denis")
// console.log(user);
// CLASS INHERITANCE
/*
    - yaitu class yang memiliki sifat turunan dari parent nya
*/
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = '';
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "Email harus lebih dari 5 karakter";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin('08221137232', 'Aisha', 20);
