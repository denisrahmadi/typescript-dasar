"use strict";
/*
    -generic adala hsebauh type data yang dinamis
*/
function getData(value) {
    return value;
}
console.log(getData("Denis").length);
console.log(getData(123));
// Generic 
function myData(value) {
    return value;
}
console.log(myData("Denis").length);
console.log(myData(123));
