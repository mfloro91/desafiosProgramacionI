// Funciones para realizar las operaciones aritméticas
function sumar() {
    // Ejemplo de uso de la función "Obtener Número" (sopcional)
    // const num1 = obtenerNumero("Ingrese el primer número:");
    // const num2 = obtenerNumero("Ingrese el segundo número:");
}

function restar() {
}

function multiplicar() {
}

function dividir() {
}

// Si se animan, pueden usar esta función dentro de sus otras funciones para simplificar el proceso de ingreso de datos a través del método prompt
// Función para obtener un número a través de un prompt
function obtenerNumero(mensaje) {
    let numero = prompt(mensaje);
    while (isNaN(numero)) {
        numero = prompt("Por favor, ingrese un número válido.");
    }
    return Number(numero);
}