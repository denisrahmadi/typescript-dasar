"use strict";
// ENUM
/*
    - Sekumpulan tipe data yang menyimpan sekumpulan data konstan
    - contoh file .env yang nyimpen data konstan konfigurasi
    - enum menyimpan data konstan di level aplikasi
    -kalo kita isi JAN dengan 1 maka jan akan bernilai 1 dan apabila kita akses Month.FEB maka nilainya otomatis berubah menjadi 2 alias increment++
*/
/* Numeric enum */
// enum Month{
//     JAN = 1, FEB = 100, MAR, APR, MAY
// }
/* Numeric enum */
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "February";
    Month["MAR"] = "March";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month.FEB);
