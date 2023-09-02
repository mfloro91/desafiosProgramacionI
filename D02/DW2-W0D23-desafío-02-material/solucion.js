// Funciones para realizar las operaciones aritméticas
function sumar() {
    const num1 = obtenerNumero("Ingrese el primer número:");
    const num2 = obtenerNumero("Ingrese el segundo número:");
    const resultado = num1 + num2;
    alert("Resultado: " + resultado);
}

function restar() {
    const num1 = obtenerNumero("Ingrese el primer número:");
    const num2 = obtenerNumero("Ingrese el segundo número:");
    const resultado = num1 - num2;
    alert("Resultado: " + resultado);
}

function multiplicar() {
    const num1 = obtenerNumero("Ingrese el primer número:");
    const num2 = obtenerNumero("Ingrese el segundo número:");
    const resultado = num1 * num2;
    alert("Resultado: " + resultado);
}

function dividir() {
    const num1 = obtenerNumero("Ingrese el primer número:");
    const num2 = obtenerNumero("Ingrese el segundo número:");

    if (num2 === 0) {
        alert("Error: No se puede dividir por cero.");
        return;
    }

    const resultado = num1 / num2;
    alert("Resultado: " + resultado);
}

// Función para obtener un número a través de un prompt
function obtenerNumero(mensaje) {
    let numero = prompt(mensaje);
    while (isNaN(numero)) {
        numero = prompt("Por favor, ingrese un número válido.");
    }
    return Number(numero);
}
