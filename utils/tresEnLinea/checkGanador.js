import { arrayGrilla } from "./arrayGrilla"
import { hayGanador } from "./hayGanador";

export const checkGanador = () => {


    // Acá vamos a agarrar el arrayGrilla y vamos a ir chequeando las distintas posibilidades de que alguien haya ganado.

    // Hay 8 posibilidades de que haya un ganador, por cada jugador. tres horizontales, tres verticales y dos diagonales.
    //  las diagonales siempre pasan por el centro

    var ganador_letra = "";
    // Chequear horizontalmente:
    for (let i = 0; i < arrayGrilla.length; i++) {
        if (arrayGrilla[i][0] != " " && arrayGrilla[i][0] === arrayGrilla[i][1] && arrayGrilla[i][0] === arrayGrilla[i][2]) {
            ganador_letra = arrayGrilla[i][0];
            hayGanador(ganador_letra);
        }
    }
    // Chequear verticalmente:
    for (let i = 0; i < arrayGrilla[0].length; i++) {
        if (arrayGrilla[0][i] != " " && arrayGrilla[0][i] === arrayGrilla[1][i] && arrayGrilla[0][i] === arrayGrilla[2][i]) {
            ganador_letra = arrayGrilla[0][i]
            hayGanador(ganador_letra);
        }
    }
    // Chequear diagonales
    // Primero, chequear si la del centro está tocada.
    if (arrayGrilla[1][1] != " ") {
        // Si está tocada la del centro, chequear que sea igual a las dos puntas contrarias
        if (arrayGrilla[1][1] === arrayGrilla[0][0] && arrayGrilla[1][1] === arrayGrilla[2][2]
            || arrayGrilla[1][1] === arrayGrilla[0][2] && arrayGrilla[1][1] === arrayGrilla[2][0]) {
                ganador_letra = arrayGrilla[1][1]
            hayGanador(ganador_letra);    // Tener en cuenta que acá ganador es la letra X o O, no jugador 1 o 2;
        }
    }
}