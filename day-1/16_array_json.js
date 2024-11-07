//Demo menggunakan array json

let daftarBuku=[
    {
        "Judul":"Ayam Goreng",
        "Penggarang" : "Dwiko Sitepu",
        "Harga" : "Seceng",
    },
    {
        "Judul":"Cara Berenang tanpa Air",
        "Penggarang" : "Sitepu",
        "Harga" : "Goceng",
    },
    {
        "Judul":"Masak Ayam",
        "Penggarang" : "Dicky ajah",
        "Harga" : "Cepe",
    }
]

for(let x = 0; x < daftarBuku.length; x++){
    console.log(`Judul: ${daftarBuku[x].Judul}, Penggarang ${daftarBuku[x].Penggarang}, Harga ${daftarBuku[x].Harga} \n -----------------s`);
}