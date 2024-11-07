//Demo branching menggunakan if-else

let nilai = 'e';
let predikat;

if((nilai === 'A') ||(nilai === 'a')){
	predikat='Istimewa';
}else if ((nilai === 'B') ||(nilai === 'b')){
	predikat='Baik'
}else if((nilai === 'C') ||(nilai === 'c')){
	predikat="Cukup"
}else if((nilai === 'D') ||(nilai === 'd')){
	predikat="Kurang"
}else if((nilai === 'E') ||(nilai === 'e')){
	predikat = "Gagal";
}else {
	predikat="nilai salah";
}

console.log(`Nilai anda:${nilai}, predikat ${predikat}`);
