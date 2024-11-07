/*
    Contoh object yang akan kita pasangi proxy
*/
let karyawan = {
    namaDepan : "Agus",
    namaBelakang : "Kurniawan"
};

/*
    Kasus
    1. Kita ingin melakukan logging
    2. kita ingin melakukan validas  jika sebuah field di ubah valuenya
*/

let penyadapaObject ={
    //get, otomatis jalan, jika field diakses
    //set, otomatis jalan, jika field dimodifikasi
    get(object,field){
        if(field==='namaDepan'){
            console.log('Field namaDepan diakses....');
            return object[field].toUpperCase();
        }else if(field==='namaBelakang'){
            console.log('Field namaBelakang diakses....');
            return object[field].toUpperCase();
        }else {
            console.log(`Field ${field} diakses...`);
            return object[field];
        }
    },
    set(object, field, value){
        if(field==='umur'){
            if(isNaN(value)){
                console.log('Umur Harus Angka...');
                object[field]=0;
            }else if(value<= 18){
                console.log('Umur harus diaatas 18');
            }else{
                object[field]=value;
                object[field]=0;
            }
        }else{
            if(!NaN(value)){
                console.log(`${field} Harus Huruf, Tidak Boleh Angka`);
                object[field]='';
            }
        }
    }
}

//Contoh akses objek menggunakan porxy
let makComblag =  new Proxy(karyawan, penyadapaObject);
console.log(makComblag.namaBelakang);
console.log(makComblag.namaDepan);

//Contooh mengubah field yg tidak diperbolehkan
makComblag.umur = 90;
console.log(makComblag.umur);