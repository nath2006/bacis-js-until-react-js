function sayHai(nama, lokasi){
    console.log(`Hallo ${nama}, Lokasi ${lokasi}`);
}

sayHai("Amir", "Jakarta");
let nama = "Amir";
let lokasi = "Jakarta";

sayHai(nama, lokasi);

// Cara Arrow
const sayHai2 = (nama, lokasi) => {
    console.log(`Hallo ${nama}, Lokasi ${lokasi}`);
}

sayHai("AyM", "Djogja");