import { actualizarGrilla } from "./actualizarGrilla";
import { arrayGrilla } from "./arrayGrilla";
import { arrayJugadores } from "./arrayJugadores";
import { checkEmpate } from "./checkEmpate";
import { checkGanador } from "./checkGanador";

export const handleClick = (id) => {
    let coordenadas = id.split(',');

    // Si el cuadrado clickado yá estaba marcado, entonces no pasa nada. salimos de la funcion
    if (arrayGrilla[coordenadas[0]][coordenadas[1]] === " ") {
        // Vemos de qué jugador es el turno. Para eso tenemos la propiedad actual en cada jugador
        //  definida por default como true para jugador 1 y false para jugador 2

        if (arrayJugadores[0].actual) {
            arrayGrilla[coordenadas[0]][coordenadas[1]] = arrayJugadores[0].letra;
            arrayJugadores[0].actual = false;
            arrayJugadores[1].actual = true
        } else {
            arrayGrilla[coordenadas[0]][coordenadas[1]] = arrayJugadores[1].letra;
            arrayJugadores[0].actual = true;
            arrayJugadores[1].actual = false;
        }

        actualizarGrilla();

        checkGanador();
        checkEmpate();
        
    }

}