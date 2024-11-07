//setTimeOut() bisa digunakan untuk menunda eksekusi selama N ms

function contoh(){
    console.log("Hallo Dunia");
}

//Tanpa Jeada
contoh();

//Dengan Jeda
setTimeout(contoh,1000);
setTimeout(contoh,2000);
setTimeout(contoh,3000);
console.log('Ini adalah dluan');

setTimeout(function(){
    console.log('Yeah')
},1000);