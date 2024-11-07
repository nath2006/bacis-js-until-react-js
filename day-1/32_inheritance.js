/**
 * Inheritance
 */
class Siswa {
    constructor(nis, nama){
        this.nis = nis;
        this.nama = nama;
    }

    cetakBioData(){
        console.log(`Nama: ${this.nama}, \nNIS: ${this.nis}`);
        console.log(`===============================`);
    }
}

class Mahasiswa extends Siswa {
    constructor(nis,nama,hp){
        super(nis,nama);
        this.hp=hp;
    }
    buatSkripsi(){
        console.log(`Buat Skripsi Pakai Chat GPT`);
    }
}

let sentod=new Mahasiswa('111','Ayam', 'Hp Ayam');
sentod.cetakBioData();
console.log(`Merk HP: ${sentod.hp}`);
sentod.buatSkripsi();