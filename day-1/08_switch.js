//Demo branching, menggunakan switch
let nilai='C'.toUpperCase();
let predikat='';

switch(nilai){
    case 'A':
        predikat = 'Istimewa'
        break;
    case 'B':
        predikat = 'Baik'
        break;
    case 'C':
        predikat = 'Cukup'
        break;
    default:
        predikat = "Salah Nilai"
        break;
    }

    console.log(`Nilai anda:${nilai},predikat ${predikat}`);
