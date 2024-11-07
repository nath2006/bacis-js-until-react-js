let info = {
    nama: 'Amir',
    perusahaan: 'PT. XYZ',
    lokasi:{
        kota: 'Tangerang Selatan',
        provinsi: 'Banten',
            detail: {
                jalan: 'Jalan Sitepu',
                kodePos: '9090'
            },
    },
};

//Demo melakukan destructuring di es6
let {nama, perusahaan}=info;

let {ayam, provinsi}=info.lokasi;

let {jalan, kodePos}=info.lokasi.detail;

console.log(`Nama ${nama}\nPerusahaan ${perusahaan}\nKota ${ayam}\nProvinsi ${provinsi}\nJalan ${jalan}\nKode Pos ${kodePos}`);