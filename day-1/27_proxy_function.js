/*
    PROXY
    - Secara harfiah artinya: middleware/perantara
    - bisa di pasang di :
        a. function
        b. object
    - digunakan untuk mengintersep/menyadap pemanggilan function/object
    - manfaatnya:
        a. kita bisa melakukan logging
        b. menjaga keamanan code
*/

const sambungString=(a,b)=>{
    return a+' '+b;
}

const sambungStringLagi=(a,b,c)=>{
    return a+' '+b+' '+c;
}

//Contoh Proxy yang digunakna untuk inteshep
const penyadapFunction = {
    apply(target, thisArg, args){
        //lakukan logging
        console.log('Terjadi Pemanggilan Function '+target);
        console.log('Dipanggil Pada '+new Date());
        //forward pemanggilan function, dan hasil di convert ke upper case
        return target(...args).toUpperCase();
    }
}

const myProxy = new Proxy(sambungString, penyadapFunction);
console.log(myProxy("Ayam_Goreng","Enak"));

const myProxyDua = new Proxy(sambungStringLagi, penyadapFunction);
console.log(myProxyDua("Ayam_Goreng","Enak","Sekali"));