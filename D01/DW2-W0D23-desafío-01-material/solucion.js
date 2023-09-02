        // Generar un número aleatorio entre 1 y 100
        const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

        // Número de intentos disponibles
        const intentosMaximos = 5;
        let intentosRealizados = 0;

        // Pedir al jugador que ingrese un número y jugar
        while (intentosRealizados < intentosMaximos) {
            // Pedir al jugador que ingrese un número
            const numeroElegido = parseInt(prompt("Intento " + (intentosRealizados + 1) + ": Ingrese un número entre 1 y 100"));

            // Validar si el jugador ingresó un número válido
            if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 100) {
                alert("Por favor, ingrese un número válido entre 1 y 100.");
            } else {
                // Incrementar el número de intentos realizados
                intentosRealizados++;

                // Comparar el número elegido con el número correcto
                if (numeroElegido === numeroCorrecto) {
                    console.log("¡Correcto! ¡Has adivinado el número " + numeroCorrecto + " en " + intentosRealizados + " intentos! ¡Felicidades!");
                    intentosRealizados = intentosMaximos; // El jugador ha adivinado, se sale del bucle while
                } else {
                    // Si se alcanza el máximo de intentos sin adivinar, mostrar el número correcto
                    if (intentosRealizados === intentosMaximos) {
                        console.log("¡Lo siento! Se te han acabado los intentos. El número correcto era " + numeroCorrecto + ".");
                    } else {
                        // Proporcionar una pista al jugador sobre si el número es mayor o menor
                        const pista = (numeroElegido < numeroCorrecto) ? "El número es mayor que " + numeroElegido + "." : "El número es menor que " + numeroElegido + ".";
                        console.log("" + pista + " Inténtalo de nuevo.");
                    }

                }
            }
        }