/*
    - di javascript ga ada class adanya prototype
    - jadi ketika buat class di typescript nanti dicompile jadi prototype 
*/ 

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
export class User {
    name: string

    constructor(name: string, public age: number){
        this.name = name
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
      return this.name
    }
}

class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ''

    constructor(phone: string, name: string, age: number){
        super(name, age)
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string){
        if (value.length < 5) {
            this._email = "Email harus lebih dari 5 karakter"
        } else {
            this._email = value
        }
    }

    get email(): string {
        return this._email
    }
}

let admin = new Admin('08221137232','Aisha', 20)


