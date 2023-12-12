import { arrayGrilla } from "./arrayGrilla";
import { mostrarPuntos } from "./mostrarPuntos";
// import direction, { manejarTecla } from "./manejarTecla";
import { pintarGrilla } from "./pintarGrilla";

export const gameSecuence = () => {
    console.log('game secuence activado');

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
        console.log('has pulsado la flecha: ' + direction)
    }
    document.body.addEventListener("keydown", manejarTecla);
    //console.log('La dirección del snake es: '+direction)




    // -----------------------------        SET INTERVAL        ------------------------------

    // Necesitamos una función que cada x tiempo haga lo siguiente:   
    let intervalSecuence = function () {
        //      repintar el mapa / grilla -> mostrar una nueva manzana si no hay ninguna, sumar un punto si comió una.
        //      Para esto necesitamos una nueva function que detecte en qué espacios puede aparecer la nueva manzana (que no haya ni snake ni muros)
        //      repintar el snake -> moverla alargarla si es necesario (y repintar los puntos para que se actualicen)

        //      Chequear que no se haya dado contra un muro o con sigo misma
        //console.log('dentro del interval');

        // Mover el snake:

        // Para eso vamos a obtener la cabeza y la cola, que son las dos partes que se modifican, y long que será el puntaje!
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
                // encontrar la cola actual
                if (arrayGrilla[i][j].split(" ")[1] > largo) {
                    console.log('Cola actual: ' + arrayGrilla[i][j].split(" "))
                    largo = arrayGrilla[i][j].split(" ")[1];
                    cola = [i, j]
                }
            }
        }
        console.log('coordenadas de la cabeza: ' + cabeza);
        console.log('coordenadas de la cola: ' + cola);
        console.log('largo/puntos: ' + largo);

        // ------------------------------------------                    MOVIMIENTO                 ----------------------------------- //

        // Vamos a sumarle a todo el snake 1 valor. La idea es tener numeradas cada parte del snake para trabajarlas más facilmente.
        for (let i = 0; i < arrayGrilla.length; i++) {
            for (let j = 0; j < arrayGrilla[i].length; j++) {

                // Si es un elemento snake, y por lo tanto tiene un valor después del espacio
                if (arrayGrilla[i][j].split(" ")[1]) {
                    // Tomamos ese numero y lo convertimos a tipo number
                    let snakeBoxNumeration = parseInt(arrayGrilla[i][j].split(" ")[1]);
                    console.log(snakeBoxNumeration);
                    // Lo redefinimos y le sumamos 1, convirtiendolo a string
                    arrayGrilla[i][j] = arrayGrilla[i][j].split(" ")[0] + " " + (snakeBoxNumeration + 1).toString();
                    
                }
            }
        }
        console.log(arrayGrilla);

        // mover la cabeza:

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
            if (arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] = " ") {
                arrayGrilla[coordenadasNuevaManzana[0]][coordenadasNuevaManzana[1]] = 'manzana';
                console.log('Nueva Manzana: ' + coordenadasNuevaManzana);
            } else {
                crearNuevaManzana()
            }
        }

        if (arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] != 'manzana') {

            // Si no come manzana, borrar la cola, que ya tenemos capturadas sus coordenadas:
            arrayGrilla[cola[0]][cola[1]] = " ";
        } else {
            // Si come manzana, que aparezca una nueva
            crearNuevaManzana();

        }




        // SI NO CHOCA O MUERE --->
        // Le damos el valor de proximaCabeza al array, para pintarlo
        arrayGrilla[proximaCabeza[0]][proximaCabeza[1]] = 'snake 1'



        pintarGrilla()

        mostrarPuntos(largo);


    }
    let gameInterval = setInterval(intervalSecuence, 250)




}