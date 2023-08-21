// Consigna: Crear un juego de adivinanzas en el cual el programa elige un número aleatorio y el jugador debe adivinar ese número. El juego proporcionará pistas sobre si el número a adivinar es mayor o menor que el intento actual del jugador

let aleatorio = parseInt(Math.random()*100);
console.log(aleatorio);
let numero;
let intento = 1;

do {

    numero = parseInt(prompt(`Intento ${intento}: Ingrese un número entre el 0 y el 100`));
    
    if (numero == aleatorio) {
        alert(`Acertaste el número secreto`);
    } else if (numero < aleatorio) {
        alert(`El número secreto es mayor que el que ingresaste`);
    } else {
        alert(`El número secreto es menor que el que ingresaste`);
    }

    intento ++;

} while (intento < 6 && numero !== aleatorio);

document.write(`<p> El número secreto es ${aleatorio} </p> <p> Usaste ${intento-1} de 5 intentos </p>` )

