import { actualizarGrilla } from "./actualizarGrilla";
import { arrayJugadores } from "./arrayJugadores";
import { mostrarStatusJugadores } from "./mostrarStatusJugadores";
import { vaciarGrilla } from "./vaciarArrayGrilla";

export const hayGanador = (ganador_letra) => {

    let ganador;
    // Vemos a qué letra le corresponde el ganador
    if (ganador_letra == arrayJugadores[0].letra) {
        ganador = arrayJugadores[0];
    } else {
        ganador = arrayJugadores[1];
    }
    // Sumarle una partida ganada al jugador:
    arrayJugadores[(ganador.jugador)-1].partidasGanadas++;
    mostrarStatusJugadores();
    alert('El ganador es el jugador ' + ganador.jugador);

    vaciarGrilla();
    actualizarGrilla();
}