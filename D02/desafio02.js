// Funciones

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}


let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));


/* El validador se puede optimizar en una función. Sin función se valida así:

let datoInvalido = false;
do {
    num1 = parseInt(prompt("Ingrese un número"));

    if(isNaN(num1)) {
        datoInvalido = true;
        alert(`Ingrese un valor numérico`)
    } else {
        datoInvalido = false;
    }

} while(datoInvalido);

do {
    num2 = parseInt(prompt("Ingrese otro número"));
    if(isNaN(num2)) {
        datoInvalido = true;
        alert(`Ingrese un valor numérico`)
    } else {
        datoInvalido = false;
    }


} while(datoInvalido);
*/

alert(`Los números ingresados han sumado ${sumar(num1, num2)}`);
alert(`Los números ingresados han restado ${restar(num1, num2)}`);
alert(`Los números ingresados han multiplicado ${multiplicar(num1, num2)}`);
alert(`Los números ingresados han dividido ${dividir(num1, num2)}`);





