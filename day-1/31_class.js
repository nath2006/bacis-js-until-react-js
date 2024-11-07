/**
 * Class
 * - Merupakan "blueprint/cetakan" dari sebuah object
 * - Object : structure yang menggambarkan object dunia nyata
 * - di dalam class / object, ada 2 komponen utama:
 *      a. fileds/properties
 *      
 */

//Membuat class

class Siswa {
    //contoh membuat field
    constructor(nis, nama){
        this.nis = nis;
        this.nama = nama;
    }

    //contoh membuat methid
    cetakBioData(){
        console.log(`Nama: ${this.nama}, NIS: ${this.nis}`);
        console.log(`===============================`);
    }
}

//Memebuat object
let amir = new Siswa('111', 'Amir Mahmud');
let budi = new Siswa('9090','Richardo');

//Mengakses Field Object
console.log(`Data Amir = NIS: ${amir.nis}, Nama: ${amir.nama}`);
console.log(`Data Amir = NIS: ${budi.nis}, Nama: ${budi.nama}`);

//Mengakses Method Object
budi.cetakBioData();
amir.cetakBioData();

//Contoh membuat fan memanggil function yang parameternya berupa object
const testSiswa = (Siswa)=>{
    Siswa.cetakBioData();
}

testSiswa(amir);
testSiswa(new Siswa('9090', 'Dadang Suradang'));


//Contoh membuat dan mengakses array object
let daftarSiswa=[
    new Siswa('100','Ayam'),
    new Siswa('101','Bebek'),
    new Siswa('103','Cacing'),
    new Siswa('104','Domba')
];

const absenSiswa=()=>{
    for (let x = 0; x<daftarSiswa.length; x++){
        console.log(`${daftarSiswa[x].nama} Hadir...`)
    }
}

absenSiswa();

//Contoh function dengan return type berupa object
const buatDataSiswa = (nis,nama)=>{
    return new Siswa(nis,nama);
}

//Contoh function dengan return type array object
const getSemuaData = () =>{
    let daftarSiswa=[
        new Siswa('100','Ayam'),
        new Siswa('101','Bebek'),
        new Siswa('103','Cacing')
    ];
    return daftarSiswa;
}

testSiswa(buatDataSiswa('777','Jhon'));
absenSiswa(getSemuaData());