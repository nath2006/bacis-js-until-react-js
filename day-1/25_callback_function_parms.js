/*
    Callback Function dengan 1 parameter
*/

function printer(y){
    console.log(y);
}

function caller(panggil,namaOrang){
    panggil(namaOrang);
}

caller(printer,'Budi');

caller(function(x){
        console.log(x)
    },"Atam"
)

caller((x)=>{
        console.log(x)
    },
    "budi"
);