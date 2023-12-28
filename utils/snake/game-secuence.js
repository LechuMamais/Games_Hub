import { snake } from "../../components/snake/snake";
import { arrayGrillaLvl1 } from "./arrayGrillaLvl1";
import { arrayGrillaLvl2 } from "./arrayGrillaLvl2";
import { arrayGrillaLvl3 } from "./arrayGrillaLvl3";
import { arrayGrillaLvl4 } from "./arrayGrillaLvl4";
import { mostrarPuntos } from "./mostrarPuntos";
// import direction, { manejarTecla } from "./manejarTecla";
import { pintarGrilla } from "./pintarGrilla";

export const gameSecuence = (gameMode) => {
    console.log('game secuence activado');

    // Puntaje, que se irá sumando 1 cada vez que coma una manzana. Además determinará en que nivel estamos jugando!
    let puntos = 0;
    let puntosParaPasarDeNivel = 5;
    let cantidadDeNiveles = 4;

    // En qué nivel estamos?

    let arrayGrilla = []


    // CAPTURAR LAS FLECHAS DE DIRECCION
    // Por un lado necesitamos una variable que pueda tomar 4 valores en funcion de las flechas que se toquen;
    // Agregarel escuchador de eventos para el evento keydown. la function manejarTecla ya está definida
    // y nos devuelve una var direction o down left o right

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
    // console.log('La dirección del snake es: '+ direction);

    //  --------------------        FUNCION DE CREAR MANZANA        -------------------- //
    // Definimos la función para que aparezca una nueva manzana. Ésta se llama a si misma si resulta que da con una casilla ya ocupada.
    const crearNuevaManzana = () => {
        // Primero, chequear que no haya ninguna manzana ya pintada:
        let hayManzana = false;
        for (let i = 0; i < arrayGrilla.length; i++) {
            if (arrayGrilla[i].includes("manzana")) {
                hayManzana = true
            }
        }
        if (!hayManzana) {
            // Después, ubicarla de forma random. Si da un espacio ya ocupado, se vuelve a ejecutar la función hasta dar con un espacio vacio
            let coordenadasNuevaManzana = [Math.floor(Math.random() * arrayGrilla.length), Math.floor(Math.random() * arrayGrilla[0].length)];
            if (arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] === " ") {
                arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] = 'manzana';
                //console.log('Nueva Manzana: ' + coordenadasNuevaManzana);
            } else {
                crearNuevaManzana()
            }
        }
    }

    // Vamos a definir una función que, si no hay snake pintado, pinte uno. De esta manera, se va a ejecutar cuando se comience un nuevo nivel.
    // Ademas va a pintar una nueva manzana.
    const pintarNuevoSnake = () => {
        //Comprobar que haya un snake en el nivel, y sino pintarlo.
        let haySnake = false;
        for (let i = 0; i < arrayGrilla.length; i++) {
            if (arrayGrilla[i].includes("snake 1")) {
                haySnake = true
            }
        };
        if (haySnake === false) {
            //le pintamos un snake de 3 de largo en el centro:
            arrayGrilla[8][10] = "snake 3";
            arrayGrilla[8][11] = "snake 2";
            arrayGrilla[8][12] = "snake 1";
        };
        crearNuevaManzana();
    }

    function borrarSnake() {
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {
                if (arrayGrilla[i][j].split(" ")[0] === "snake") {
                    arrayGrilla[i][j] = " ";
                    console.log('snake borrado');
                }
            }
        }
    }

    // Funcion de PERDISTE!!!
    function hasPerdido(gameMode) {
        // Cortamos la ejecución
        clearInterval(gameInterval);
        // Y preguntamos que hacer.
        let text = ('Has perdido! Quieres comenzar de nuevo en modo ' + gameMode + '?\nACEPTAR para comenzar en Regular.\nCANCELAR para comenzar en Linear Mode!');
        if (confirm(text) == true) {
            // Para dar la opción de volver a comenzar el juego, hay que borrar muchas cosas:
            borrarSnake();
            pintarNuevoSnake();
            let gameSection = document.querySelector('#game_section');
            gameSection.innerHTML = "";
            console.log(gameSection);
            snake();
            gameMode = "regular";
            gameSecuence(gameMode);

        } else {
            //window.location.reload()
            gameMode = "linear";
            gameSecuence(gameMode);
        }
    }


    // -----------------------      VELOCIDAD DEL JUEGO!!!      ------------------------------ //
    const velocidadInicial = 200;
    const factorDeAumento = 0.3;

    // Cada 4 niveles completos, le aplica el factor de correción 1 vez

    let velocidadDelJuego = velocidadInicial - velocidadInicial * factorDeAumento * Math.floor(puntos / (puntosParaPasarDeNivel * cantidadDeNiveles))

    //  ------- CAMBIAR VELOCIDAD --------
    // Necesitamos una función que cambie la velocidad del juego. Luego la vamos a invocar cuando se pasen todos los niveles.
    function cambiarVelocidadIntervalo() {
        clearInterval(gameInterval);
        //velocidadDelJuego = velocidadInicial * (1/factorDeAumento)
        velocidadDelJuego = velocidadInicial - velocidadInicial * factorDeAumento * Math.floor(puntos / (puntosParaPasarDeNivel * cantidadDeNiveles))
        setInterval(intervalSecuence, velocidadDelJuego);
    }

    // -----------------------------        SET INTERVAL        ------------------------------ //

    // Necesitamos una función que cada x tiempo haga lo siguiente:   
    let intervalSecuence = function () {

        // Chequear, si estamos en regular mode, si no pasamos de nivel, y redefinir la grilla

        //      repintar el mapa / grilla -> mostrar una nueva manzana si no hay ninguna, sumar un punto si comió una.
        //      Para esto necesitamos una nueva function que detecte en qué espacios puede aparecer la nueva manzana (que no haya ni snake ni muros)
        //      repintar el snake -> moverla alargarla si es necesario (y repintar los puntos para que se actualicen)

        //      Chequear que no se haya dado contra un muro o con sigo misma
        //console.log('dentro del interval');


        //      -------------------------------       SELECTOR DE NIVELES      --------------------------------       //

        // El selector de niveles se volviió bastante complejo. La idea es que cada x puntos cambie de nivel y vaya pasando entre los 4 niveles, y que cuando
        // termine con el cuarto, vuelva a comenzar con el primero pero con un poco más de velocidad.
        // Además, por facilidad y jugabilidad, que con cada nuevo nivel se resetee la direction hacia la derecha.



        if (gameMode === 'regular') {
            //console.log('regular mode!');
            let puntosPorVueltaCompleta = puntosParaPasarDeNivel * cantidadDeNiveles;
            let puntosEnEstaVuelta = puntos;

            while (puntosEnEstaVuelta >= puntosPorVueltaCompleta) {
                puntosEnEstaVuelta = puntosEnEstaVuelta - puntosPorVueltaCompleta
            }

            if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 0 && puntosEnEstaVuelta < puntosParaPasarDeNivel * 1) {
                arrayGrilla = arrayGrillaLvl1;
                pintarNuevoSnake()
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 1 && puntosEnEstaVuelta < puntosParaPasarDeNivel * 2) {
                arrayGrilla = arrayGrillaLvl2;
                pintarNuevoSnake()
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 2 && puntosEnEstaVuelta < puntosParaPasarDeNivel * 3) {
                arrayGrilla = arrayGrillaLvl3;
                pintarNuevoSnake()
            } else if (puntosEnEstaVuelta >= puntosParaPasarDeNivel * 3 && puntosEnEstaVuelta < puntosParaPasarDeNivel * 4) {
                arrayGrilla = arrayGrillaLvl4;
                pintarNuevoSnake()
            }
        }
        else if (gameMode === 'linear') {
            arrayGrilla = arrayGrillaLvl1;
            pintarNuevoSnake()
        }


        // ------------------------------------------                    MOVIMIENTO                 ----------------------------------- //

        // Mover el snake:
        // Para eso vamos a obtener la cabeza y la cola, que son las dos partes que se modifican!
        let cabeza;
        let cola;
        let proximaCabeza = [];
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {
                // encontrar las coordenadas de la cabeza actual
                if (arrayGrilla[i][j].endsWith(' 1')) {
                    cabeza = [i, j]
                }
            }
        }

        // Encontrar la COLA:
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

        cola = [resultadoMaxNum.ubicacion.subarray, resultadoMaxNum.ubicacion.cadena]

        // Vamos a sumarle a todo el snake 1 valor. La idea es tener numeradas cada parte del snake para trabajarlas más facilmente.
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {
                // Si es un elemento snake, y por lo tanto tiene un valor después del espacio
                if (arrayGrilla[i][j].split(" ")[1]) {
                    // Tomamos ese numero y lo convertimos a tipo number
                    let snakeBoxNumeration = parseInt(arrayGrilla[i][j].split(" ")[1]);
                    // Lo redefinimos y le sumamos 1, convirtiendolo a string
                    arrayGrilla[i][j] = arrayGrilla[i][j].split(" ")[0] + " " + (snakeBoxNumeration + 1).toString();
                }
            }
        }

        // Definimos la ubicación donde estará la próxima cabeza, que depende de la ubicación actual del snake y de la direction en la que se mueve.
        // Tenemos en cuenta que si se encuentra en el borde, atraviesa y saldrá del lado opuesto del mapa.
        if (direction === 'right') {
            // Si no está en el borde
            if (cabeza[1] != arrayGrilla[cabeza[0]].length - 1) {
                proximaCabeza = [cabeza[0], (cabeza[1] + 1)];
            } else {
                proximaCabeza = [cabeza[0], 0];
            }
        } else if (direction === 'left') {
            if (cabeza[1] != 0) {
                proximaCabeza = [cabeza[0], cabeza[1] - 1];
            } else {
                proximaCabeza = [cabeza[0], (arrayGrilla[cabeza[0]].length - 1)];
            }
        } else if (direction === 'up') {
            if (cabeza[0] != 0) {
                proximaCabeza = [cabeza[0] - 1, cabeza[1]];
            } else {
                proximaCabeza = [(arrayGrilla.length - 1), cabeza[1]];
            }
        } else if (direction === 'down') {
            if (cabeza[0] != arrayGrilla.length - 1) {
                proximaCabeza = [cabeza[0] + 1, cabeza[1]];
            } else {
                proximaCabeza = [0, cabeza[1]];
            }
        }

        //          ----------------------------------      COMER   MANZANA     ----------------------------------         //

        // Si la proxima cabeza no coincide con una manzana, que borre la cola.
        // Pero si coincide con una manzana, que aparezca una nueva. Esta función está definida arriba, por fuera del interval.

        //      ------------------------        CHOCA CON ALGO????        -----------------------
        // Comprobaciones del box de PROXIMA CABEZA:
        if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] === 'manzana') {
            // Si come manzana, que aparezca una nueva, sume un punto, no borre cola y avance la cabeza.
            arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] = "snake 1"
            crearNuevaManzana();
            puntos++;
            // Si al sumar este punto PASA DE NIVEL, que borre el snake. Luego pintará uno nuevo al mostrar el nivel nuevo.
            if (gameMode == "regular" && puntos % puntosParaPasarDeNivel === 0) {
                console.log('Has pasado al siguiente nivel!');
                // Este es el momento de la secuencia del juego en donde comienza un NUEVO NIVEL.
                // Entonces reconfoguramos algunas cositas como la dirección a la que se mueve, y su ubicación. Como ya tenemos más arriba una comprobación
                // que pinta un snake si no hay ninguno (para comenzar el nivel 1) entonces con borrar el snake ya es suficiente, luego pintara otro.
                direction = 'right';
                borrarSnake();

            }
            // Además, si no solo pasa de nivel, sino que da vuelta a todos los niveles, le cambiamos la velocidad del interval:
            if (gameMode == "regular" && puntos === puntosParaPasarDeNivel * cantidadDeNiveles) {
                cambiarVelocidadIntervalo()
            }

        } else if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] == "muro" || arrayGrilla[proximaCabeza[0]][proximaCabeza[1]].split(" ")[0] == "snake") {
            // Si CHOCA CON ALGO, sea muro o sea consigo mismo
            console.log('Has chocado con ' + arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] + ' en la fila ' + proximaCabeza[0] + ', columna ' + proximaCabeza[1]);
            arrayGrilla[cola[0]][cola[1]] = " "; // Borramos la cola

            hasPerdido(gameMode)

        } else if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] === " ") {
            // Finalmente, si no choca con nada será borrar la cola, que ya tenemos capturadas sus coordenadas, y pintar su nueva cabeza:
            arrayGrilla[cola[0]][cola[1]] = " ";
            // Y pintar su nueva cabeza:
            arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] = "snake 1"
        }

        mostrarPuntos(puntos);
        pintarGrilla(arrayGrilla);

    }

    let gameInterval = setInterval(intervalSecuence, velocidadDelJuego)
}
