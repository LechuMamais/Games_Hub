import { arrayGrillaLvl1 } from '../../utils/snake/arrayGrillaLvl1';
import { gameSecuence } from '../../utils/snake/game-secuence';
import { mostrarPuntos } from '../../utils/snake/mostrarPuntos';
import { pintarGrilla } from '../../utils/snake/pintarGrilla';
import './style.css'

export const snake = () => {

    //      hasta la linea 40 aprox esta prácticamente copiado de tres en linea.

    let div = document.querySelector('#game_section');

    // Start Buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons-container';

    const startSnakeButton = document.createElement('button');
    startSnakeButton.id = 'start-snake-button-regular';
    startSnakeButton.textContent = 'Start Regular Mode';
    startSnakeButton.addEventListener('click', function () {
        gameSecuence('regular')
    });
    buttonsContainer.appendChild(startSnakeButton)

    const startSnakeButtonLinearMode = document.createElement('button');
    startSnakeButtonLinearMode.id = 'start-snake-button-linear';
    startSnakeButtonLinearMode.textContent = 'Start Linear Mode';
    startSnakeButtonLinearMode.addEventListener('click', function () {
        gameSecuence('linear')
    });
    buttonsContainer.appendChild(startSnakeButtonLinearMode)

div.appendChild(buttonsContainer)
    // Creamos la grilla
    const grilla = document.createElement('div');
    grilla.id = 'grilla-snake';
    // Mostramos la grilla
    div.appendChild(grilla);
    pintarGrilla(arrayGrillaLvl1);


    //Mostrar estatus de Jugadores:
    const divJugadores = document.createElement('div');
    divJugadores.id = 'div-jugadores';

    div.appendChild(divJugadores);
    mostrarPuntos();
}