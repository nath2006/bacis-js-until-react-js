//Demo Membuat Object
//JSON (Javascript Object Notation)

/*
Object 
Variabel yang menyimpan data lebih dari satu, dan bisa bertipe data beragam
Object terdiri dari Key n Value
*/

//Oobject Construction
let info = {
    nama: 'Amir',
    perusahaan: 'PT. XYZ',
    lokasi:{
        kota: 'Tangerang Selatan',
        provinsi: 'Banten'
    },
};

//Oobject De-Construction
console.log(`Nama: ${info.nama} \nPeursahaan: ${info.perusahaan} \nLokasi: ${info.lokasi.kota}, ${info.lokasi.provinsi}`);