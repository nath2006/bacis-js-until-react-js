//CONTOH DEKLARASI GANDA

//1. Tanpa modifier, ada kemungkinan terjadi deklarasi ganda
nama = "Budi";

//Anggap saja anda tidak sengaja membuat variabel ganda dengan nama yang sama
//Di baris 9081
nama = "Ayam";
console.log("Nama :" + nama);


//Var juga sama
var citaCita = "Kapal Laut";
var citaCita = "Budi Ono";
console.log("Cita cita:" + citaCita);


//Let, tidak mengijinkan deklarasi yang sama
// Err Msg: Identifier 'harga' has already been declared
let harga = 900;
// let harga = 1000;
console.log("Harga: " +harga);

