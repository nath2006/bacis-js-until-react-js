//Demo menggunakan array

//array construction
let siswa = ['Amir', 'Budi', 'Ayaman'];

let jumlahSiswa=siswa.length;

//array de-construction
console.log('Siswa 0:'+siswa[0]);
console.log('Siswa 1:'+siswa[1]);
console.log('Siswa 2:'+siswa[2]);

console.log(`==========================================`);
for(let x=0;x<siswa.length; x++) {
    console.log(`Siswa ke-${x+1}: ${siswa[x]}`);
}