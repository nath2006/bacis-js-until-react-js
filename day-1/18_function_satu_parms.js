//1. Cara Normal
function sayHai (nama) {
    console.log(`Hallo ${nama}`);
}

//Langsung dengan literal
sayHai('Joko');

//Meneggunakan variabel
let nama = 'Jock';
sayHai(nama);

//2. Cara arrow tanpa (), jika hanya ada 1 parameter (), tidak wajib di pakai di arrow function
const sayHai2 = nama => {
    console.log(`Hallo ${nama}`);
}

//3. Cara arrow dengan ()
const sayHai3 = (nama) => {
    console.log(`Hallo ${nama}`);
}

sayHai2('Jokowi');
sayHai3('Wono');