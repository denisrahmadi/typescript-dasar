"use strict";
// Tipe data pada return function
/*
    - kalo type nya udh di deklarasiin maka tipenya harus sesuai sama yang dideklarasiin
    - void maksudnya dia gaboleh ada return
*/
function getName() {
    return "Halo nama saya Denis";
}
// console.log(getName());
function getAge() {
    return 23;
}
function printName() {
    console.log("print denis");
}
// printName()
// --------------------------------------------------------------------------------
// static type for parameter in function
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 5);
let age = 23; //ini contoh kalo mau custom type data sendiri
const Add = (val1, val2) => {
    return val1 + val2;
};
// --------------------------------------------------------------------------------
// default parameter
const fullName = (first, last = "Rahmadi") => {
    return first + ' ' + last;
};
console.log(fullName('Denis', 'Ganteng'));
// --------------------------------------------------------------------------------
// optional parameter
/*
    - kalo kita kasih type di return nya sebagai number maka nanti akan error makanya typenya diganti jadi string aja
    - sebenernya kalo parameternya number tidak disarankan menggunakan optional
*/
const getTotal = (val1, val2) => {
    return val1 + ' ' + val2;
    // return val1 + val2
};
console.log(getTotal(1, 2));
