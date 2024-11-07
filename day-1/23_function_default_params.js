// Demo function dengan default params
/*
Default parameter akan :
1. Dipakai jika user tidak memasukan data
2. Otomatis Diabaikan jika user memasukan data
*/
function cetakData(nis="Nis Kosong!",nama="Nama Kosong!",alamat="Alamat Kosong!"){
    console.log(`Nis: ${nis} \nNama: ${nama} \nAlamat: ${alamat}`);
    console.log("======================");
}

cetakData();
cetakData("091011","Amir","Jalan Jakarta Raya");