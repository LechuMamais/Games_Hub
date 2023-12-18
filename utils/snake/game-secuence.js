import { arrayGrillaLvl1 } from "./arrayGrillaLvl1";
import { arrayGrillaLvl2 } from "./arrayGrillaLvl2";
import { arrayGrillaLvl3 } from "./arrayGrillaLvl3";
import { arrayGrillaLvl4 } from "./arrayGrillaLvl4";
import { mostrarPuntos } from "./mostrarPuntos";
// import direction, { manejarTecla } from "./manejarTecla";
import { pintarGrilla } from "./pintarGrilla";

export const gameSecuence = (mode) => {
    console.log('game secuence activado');

    // Puntaje, que se irá sumando 1 cada vez que coma una manzana. Además determinará en que nivel estamos jugando!
    let puntos = 0;
    let puntosParaPasarDeNivel = 5;
    let cantidadDeNiveles = 4;

    // En qué nivel estamos?

    let arrayGrilla = []


    // CAPTURAR LAS FLECHAS DE DIRECCION
    // Por un lado necesitamos una variable que pueda tomar 4 valores en funcion de las flechas que se toquen;
    // Agregarel escuchador de eventos para el evento keydown. la function manejarTecla ya está definida, y nos devuelve una variable direction uo down left o right

    let direction = 'right'
    // Tener en cuenta que el snake puede seguir en la dirección en la que va, o girar hacia su derecha o izq, pero no cambiar de direccion 180grados
    function manejarTecla(event) {

        switch (event.key) {
            case 'ArrowRight':
                if (direction != 'left') {
                    direction = 'right';
                }
                break;
            case 'ArrowLeft':
                if (direction != 'right') {
                    direction = 'left';
                }
                break;
            case 'ArrowUp':
                if (direction != 'down') {
                    direction = 'up';
                }
                break;
            case 'ArrowDown':
                if (direction != 'up') {
                    direction = 'down';
                }
                break;
            default:
                // Si la tecla no es una flecha, no hacemos nada
                return;
        }
    }
    document.body.addEventListener("keydown", manejarTecla);
    //console.log('La dirección del snake es: '+direction)


    // -----------------------      VELOCIDAD DEL JUEGO!!!      -------

    const velocidadInicial = 200;
    const factorDeAumento = 0.2;

    // Cada 4 niveles completos, le aplica el factor de correción 1 vez

    let velocidadDelJuego = velocidadInicial - velocidadInicial * factorDeAumento * Math.floor(puntos / (puntosParaPasarDeNivel * cantidadDeNiveles))

    // -----------------------------        SET INTERVAL        ------------------------------

    // Necesitamos una función que cada x tiempo haga lo siguiente:   
    let intervalSecuence = function () {

        // Chequear, si estamos en regular mode, si no pasamos de nivel, y redefinir la grilla

        //      repintar el mapa / grilla -> mostrar una nueva manzana si no hay ninguna, sumar un punto si comió una.
        //      Para esto necesitamos una nueva function que detecte en qué espacios puede aparecer la nueva manzana (que no haya ni snake ni muros)
        //      repintar el snake -> moverla alargarla si es necesario (y repintar los puntos para que se actualicen)

        //      Chequear que no se haya dado contra un muro o con sigo misma
        //console.log('dentro del interval');



        //      -------------------------------       SELECTOR DE NIVELES      --------------------------------       //


        if (mode = 'regular') {
            //console.log('regular mode!');
            let puntosPorVueltaCompleta = puntosParaPasarDeNivel * cantidadDeNiveles;

            let puntosEnEstaVuelta = puntos;

            while (puntos > puntosPorVueltaCompleta) {
                puntosEnEstaVuelta = puntos - puntosPorVueltaCompleta
            }
            console.log(puntosEnEstaVuelta);
            if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 0 && puntos < puntosParaPasarDeNivel * 1) {
                arrayGrilla = arrayGrillaLvl1;
                //console.log('lvl 1!');
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 1 && puntos < puntosParaPasarDeNivel * 2) {
                arrayGrilla = arrayGrillaLvl2;
                //console.log('lvl 2!');
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 2 && puntos < puntosParaPasarDeNivel * 3) {
                arrayGrilla = arrayGrillaLvl3;
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 3 && puntos < puntosParaPasarDeNivel * 4) {
                arrayGrilla = arrayGrillaLvl4;
            }

        }

        // Mover el snake:

        // Para eso vamos a obtener la cabeza y la cola, que son las dos partes que se modifican, y largo, que determina el puntaje!
        let cabeza;
        let largo = 0;

        let cola;
        let proximaCabeza = [];
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {
                // encontrar la cabeza actual
                if (arrayGrilla[i][j].endsWith(' 1')) {
                    cabeza = [i, j]
                }
            }
        }


        const resultadoMaxNum = arrayGrilla.reduce((maximoInfo, subarray, subarrayIndex) => {
            const maximoSubarray = subarray.reduce((subarrayMaximo, cadena, cadenaIndex) => {
                const match = cadena.match(/(\d+)$/);

                if (match) {
                    const numero = parseInt(match[1], 10);
                    if (!isNaN(numero) && numero > subarrayMaximo.valor) {
                        return { valor: numero, ubicacion: { subarray: subarrayIndex, cadena: cadenaIndex } };
                    }
                }

                return subarrayMaximo;
            }, maximoInfo);

            return maximoSubarray;
        }, { valor: -Infinity, ubicacion: { subarray: -1, cadena: -1 } });
        largo = resultadoMaxNum.valor;
        cola = [resultadoMaxNum.ubicacion.subarray, resultadoMaxNum.ubicacion.cadena]


        // ------------------------------------------                    MOVIMIENTO                 ----------------------------------- //

        // Vamos a sumarle a todo el snake 1 valor. La idea es tener numeradas cada parte del snake para trabajarlas más facilmente.
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {

                // Si es un elemento snake, y por lo tanto tiene un valor después del espacio
                if (arrayGrilla[i][j].split(" ")[1]) {

                    // Tomamos ese numero y lo convertimos a tipo number
                    let snakeBoxNumeration = parseInt(arrayGrilla[i][j].split(" ")[1]);
                    //console.log(snakeBoxNumeration);
                    // Lo redefinimos y le sumamos 1, convirtiendolo a string
                    arrayGrilla[i][j] = arrayGrilla[i][j].split(" ")[0] + " " + (snakeBoxNumeration + 1).toString();

                }
            }
        }


        // Definimos la próxima cabeza

        if (direction === 'right') {
            // Si no está en el borde
            if (cabeza[1] != arrayGrilla[cabeza[0]].length - 1) {
                proximaCabeza = [cabeza[0], (cabeza[1] + 1)];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            } else {
                proximaCabeza = [cabeza[0], 0];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            }

        } else if (direction == 'left') {
            if (cabeza[1] != 0) {
                proximaCabeza = [cabeza[0], cabeza[1] - 1];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            } else {
                proximaCabeza = [cabeza[0], (arrayGrilla[cabeza[0]].length - 1)];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            }

        } else if (direction == 'up') {
            if (cabeza[0] != 0) {
                proximaCabeza = [cabeza[0] - 1, cabeza[1]];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            } else {
                proximaCabeza = [(arrayGrilla.length - 1), cabeza[1]];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            }

        } else if (direction == 'down') {
            if (cabeza[0] != arrayGrilla.length - 1) {
                proximaCabeza = [cabeza[0] + 1, cabeza[1]];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            } else {
                proximaCabeza = [0, cabeza[1]];
                //console.log('La próxima cabeza es: ' + proximaCabeza);
            }

        }




        //          ----------------------------------      COMER   MANZANA     ----------------------------------         //

        // Si la proxima cabeza no coincide con una manzana, que borre la cola.
        // Pero si coincide con una manzana, que aparezca una nueva
        // Definimos la función para que aparezca una nueva manzana. Ésta se llama a si misma si resulta que da con una casilla ya ocupada.
        const crearNuevaManzana = () => {
            let coordenadasNuevaManzana = [Math.floor(Math.random() * arrayGrilla.length), Math.floor(Math.random() * arrayGrilla[0].length)];
            if (arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] === " ") {
                arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] = 'manzana';
                //console.log('Nueva Manzana: ' + coordenadasNuevaManzana);
            } else {
                crearNuevaManzana()
            }
        }


        //      ------------------------        CHOCA CON ALGO????        -----------------------
        // Comprobaciones del box de PROXIMA CABEZA:
        if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] === " ") {

            // Si está vacío, borrar la cola, que ya tenemos capturadas sus coordenadas:
            arrayGrilla[cola[0]][cola[1]] = " ";
        } else if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] === 'manzana') {
            // Si come manzana, que aparezca una nueva y no borre cola.
            crearNuevaManzana();
            puntos++;

        } else {
            // Si CHOCA CON ALGO
            console.log('Has chocado con ' + arrayGrilla[proximaCabeza[0]][proximaCabeza[1]]);
            arrayGrilla[cola[0]][cola[1]] = " "; // Borramos la cola

            // Momentaneamente mostramos un ALERT
            alert('Has perdido');
            // Y cortamos la ejecución
            clearInterval(gameInterval);
        }




        // SI NO CHOCA O MUERE --->

        // Le damos el valor de proximaCabeza al array, para pintarlo
        arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] = 'snake 1'


        mostrarPuntos(puntos);
        pintarGrilla(arrayGrilla)


    }
    let gameInterval = setInterval(intervalSecuence, velocidadDelJuego)





}