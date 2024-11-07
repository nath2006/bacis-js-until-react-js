//Contoh function non void

function kalikan(a,b){
    let c = a*b;
    return c;
}

//Cara panggil pertama
let hasilKali = kalikan(10,2);
console.log(`Hasil kali dari 10 dan 2 adalah ${hasilKali}`);

//Cara panggil kedua
console.log(kalikan(90,3));


//Cara panggil ketiga
console.log(kalikan(kalikan(90,3), kalikan(3,10)));