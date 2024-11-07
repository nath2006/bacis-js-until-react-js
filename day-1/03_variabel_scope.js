//Contoh demo variabel life cycle

//Tanpa modifer, tidak support scope;
nama = "Amir";

{
	nama="Budi";
}

console.log("Nama: "+nama);

//var, juga tidak support scope
var alamat="Jalan Gagak";
{
	var alamat="Jalan Perkutut"
}

console.log('Alamat: ' + alamat);

//let, support scope
// Sangat disarankan pakai let
let namaBelakang = "Siregar";
{
	let namaBelakang = "Sutomo";
}

console.log('Nama Belakang :' + namaBelakang);
