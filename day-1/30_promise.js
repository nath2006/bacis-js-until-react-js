/**
 * PROMISE
 * secara harfiah : janji
 * 3 jenis aktifitas di dalam janji:
 *  - 1. wait (menunggu)
 *  - 2. resolve (janji dilaksanakan dan berhasil sesuai harapan)
 *  - 3. reject :
 *      a. janji tidak dilaksanakan.
 *      b. janji dilaksanakan tapi tidak sesuai. 
 * 
 * Didalam ES6, promise digunkan untuk m enjalan sync task, contoh L memanggil API, memanggil function, DLL.
 */

//Contoh penggunaan promise
function acak() {
    let randomNo = Math.floor(Math.random() * 100);
    return randomNo; 
}

let janjiGenap = new Promise((resolve, reject) => {
    setTimeout(() => {
        let bilAcak = acak();
        if ((bilAcak % 2) === 0) {
            resolve(bilAcak);
        } else {
            reject(bilAcak);
        }
    }, 3000);
});

// Menunggu janji
janjiGenap.then(
    (data)=>{ console.log(`Aasik genap ${data}`); },
    (data)=>{ console.log(`Yah.. ganjil ${data}`); }
).finally(() => {
    console.log(`Selesai`);
});
