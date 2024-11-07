/*
    Callback Function

    Kita bisa membuat function dengan parameter tidak berupa data, tetapi function lain
*/

function duluan(nanti){
    console.log(`Ini Output Pertama`);
    nanti();
    console.log(`----------------------------`);
}

function functionLain(){
    console.log(`Ini Output dari Function Lain`)
}

function functionLainLagi(){
    console.log(`Ini Output dari Function Lain Lagi`)
}

duluan(functionLain);
duluan(functionLainLagi);

//anonymous function
duluan(function () {
    console.log("Makin aneh aaja")
})

//anonymous arrow function
duluan(()=>{
    console.log("Mulai pusing!");
})