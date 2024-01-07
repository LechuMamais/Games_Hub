import { actualizarGrilla } from "./actualizarGrilla";
import { arrayGrilla } from "./arrayGrilla";
import { arrayJugadores } from "./arrayJugadores";
import { checkEmpate } from "./checkEmpate";
import { checkGanador } from "./checkGanador";
import { mostrarStatusJugadores } from "./mostrarStatusJugadores";

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
        

        //mostrarStatusJugadores()
        // En verdad no necesito borrarlo y volverlo a mostrar, necesito que se le cambien los estilos para mostrar a quien le toca!

        let divJugador_1 = document.querySelector('#divJugador_1');
        let divJugador_2 = document.querySelector('#divJugador_2');
        console.log(divJugador_1);
        if(arrayJugadores[0].actual === true){
            // Probamos a ver si la transicion funciona agregando class
            divJugador_1.classList.add('div-jugador-actual');
            divJugador_2.classList.remove('div-jugador-actual');
            //divJugador_1.style.boxShadow = '0px 0px 59px 8px rgba(0,0,0,0.8)';
        }else{
            divJugador_2.classList.add('div-jugador-actual');
            divJugador_1.classList.remove('div-jugador-actual');
        }



    }

}