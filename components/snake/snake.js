import { gameSecuence } from '../../utils/snake/game-secuence';
import { mostrarPuntos } from '../../utils/snake/mostrarPuntos';
import { pintarGrilla } from '../../utils/snake/pintarGrilla';
import './style.css'

export const snake = () => {

    //      hasta la linea 40 aprox esta prácticamente copiado de tres en linea.

    let div = document.querySelector('#game_section');

    // Start Button
    const startSnakeButton = document.createElement('button');
    startSnakeButton.id = 'start-snake-button';
    startSnakeButton.textContent = 'Start';
    startSnakeButton.addEventListener('click', function () {
        gameSecuence()
    });
    div.appendChild(startSnakeButton)


    // Creamos la grilla
    const grilla = document.createElement('div');
    grilla.id = 'grilla-snake';
    // Mostramos la grilla
    div.appendChild(grilla);
    pintarGrilla();


    //Mostrar estatus de Jugadores:
    const divJugadores = document.createElement('div');
    divJugadores.id = 'div-jugadores';

    div.appendChild(divJugadores);
    mostrarPuntos();
}