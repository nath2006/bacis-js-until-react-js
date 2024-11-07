/*
    Callback dengan parms lebih dari 1
*/

const cetak=(a,b)=>{
    console.log(`Nilai A: ${a} Nilai B: ${b}`);
}

const perkalihan=(a,b)=>{
    console.log(`Nilai A: ${a} Nilai B: ${b} Hasil Kalih ${a*b}`);
}

const main=(data1, data2, functionPemroses)=>{
    functionPemroses(data1, data2);
}

main("Budi", "Setiawan", cetak);
main(1,90, perkalihan);


main("Budi", "Atams", (a,b)=>{
        console.log(`Nilai A: ${a} Nilai B: ${b}`);
    }
)




main((90,100), function(a,b){
    console.log(`Nilai A: ${a} Nilai B: ${b} Hasil Kalih ${a*b}`);
})