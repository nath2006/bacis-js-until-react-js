let siswa = ['Amir', 'Ayam', 'Dicky', 'Fernando'];
let kota = ['jakarta', 'bandung', 'surabaya'];

function cetakData(data){
    for(let x=0; x<data.length; x++){
        console.log(`Data ${x} : ${data[x]}`);
    }
    console.log(`=======================`);
}

cetakData(siswa);
cetakData(kota);

const cetakData1=(data)=> {
    for(let x=0; x<data.length; x++){
        console.log(`Data ${x} : ${data[x]}`);
    }
    console.log(`=======================`);
    
}

cetakData1(siswa);
cetakData1(kota);