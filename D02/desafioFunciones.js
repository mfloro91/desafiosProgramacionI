//Funciones

let resultado; 

function sumar(a, b) {
    resultado = a + b;
    return resultado;
}

function restar(a, b) {
    resultado = a - b;
    return resultado;
}

function dividir(a, b) {
    resultado = a / b;
    return resultado;
}

function multiplicar(a, b) {
    resultado = a * b;
    return resultado;
}

function mostrarResultado() {
    document.write(`El resultado de la operación es ${resultado} </br>`);
    document.write(`<a href="./desafio02.html"> Hacer otra cuenta <a>`)
}

// Valido que sea número y sino lo es, pongo un alert

function obtenerNumero(mensaje) {
    let numero;
    do {
    numero = parseInt(prompt(mensaje));
    if (isNaN(numero)){
        alert("Por favor ingrese un valor numérico");
    }
    } while (isNaN(numero));
    return numero;
}

// Declaro las variables con las que se ejecutarán las funciones

let a = obtenerNumero("Ingrese el primer número");
document.write(`Valor 1: ${a} </br>`);
let b = obtenerNumero("Ingrese otro número");
document.write(`Valor 2: ${b} </br>`);
document.write(`Ingrese la operación que desea realizar con los números y luego apriete igual para imprimir el resultado.`);

