//cara 1
kalikan=(a,b)=> a*b

//cara 2, dengan keyword return dan harus 1 bari
kalikan2=(a,b)=> {
    let hasil=a*b;
    return hasil;
}

//Cara panggil pertama
let hasilKali = kalikan(10,2);
console.log(`Hasil kali dari 10 dan 2 adalah ${hasilKali}`);

//Cara panggil kedua
console.log(kalikan(90,3));


//Cara panggil ketiga
console.log(kalikan(kalikan(90,3), kalikan(3,10)));