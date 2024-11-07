// Demo Menggunakan spread operator
// Spread operator digunakan untuk mengcopy field dari 1 objek ke objek lain

let info = {
    perusahaan: 'PT. XYZ',
    lokasi:{
        kota: 'Tangerang Selatan',
        provinsi: 'Banten',
    },
};

let pegawaiBaru = {
    ...info,
    nama: 'Joko'
}

console.log(pegawaiBaru);