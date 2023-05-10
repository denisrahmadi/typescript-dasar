// Tipe data pada return function
/*
    - kalo type nya udh di deklarasiin maka tipenya harus sesuai sama yang dideklarasiin
    - void maksudnya dia gaboleh ada return
*/

function getName(): string {
    return "Halo nama saya Denis";
}
// console.log(getName());

function getAge(): number {
    return 23;
}

function printName(): void {
    console.log("print denis");
    
}
// printName()

// --------------------------------------------------------------------------------

// static type for parameter in function
function multiply(val1: number, val2: number): number{
    return val1 * val2
}

const result = multiply(2, 5)
// console.log(result);

// --------------------------------------------------------------------------------

// function as type
type Age = number
let age: Age = 23 //ini contoh kalo mau custom type data sendiri

type Tambah = (val1: number, val2:number) => number
const Add: Tambah = (val1: number, val2:number): number => {
  return val1 + val2
}

// --------------------------------------------------------------------------------

// default parameter
const fullName = (first: string, last: string = "Rahmadi"): string => {
  return first + ' ' + last
}

console.log(fullName('Denis', 'Ganteng'));

// --------------------------------------------------------------------------------

// optional parameter
/*
    - kalo kita kasih type di return nya sebagai number maka nanti akan error makanya typenya diganti jadi string aja
    - sebenernya kalo parameternya number tidak disarankan menggunakan optional
*/
const getTotal = (val1: number, val2?: number): string => { 
  return val1 + ' ' + val2
// return val1 + val2
}

console.log(getTotal(1, 2));

