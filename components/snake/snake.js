import { arrayGrillaLvl1 } from '../../utils/snake/arrayGrillaLvl1';
import { gameSecuence } from '../../utils/snake/game-secuence';
import { mostrarPuntos } from '../../utils/snake/mostrarPuntos';
import { pintarGrilla } from '../../utils/snake/pintarGrilla';
import { showHeader } from '../header/header';
import './style.css'

export const snake = () => {
    // Esto es para ocultar lo que haya:    
    const divApp = document.querySelector('#app');
    divApp.innerHTML = "";
    // Poner el Header aca. el header tiene el boton a la home y el gamesList
    showHeader(divApp);
    // Y ahora creamoe la section donde se mostrará el juego
    const game_section = document.createElement('section');
    game_section.id = 'game_section';
    divApp.append(game_section);


    // -------------------------------------------          COMIENZA EL JUEGO!          ------------------------------------------------- //


    let gameMode;

    let div = document.querySelector('#game_section');

    // Start Buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons-container';

    const startSnakeButton = document.createElement('button');
    startSnakeButton.id = 'start-snake-button-regular';
    startSnakeButton.textContent = 'Start Regular Mode';
    startSnakeButton.addEventListener('click', function () {
        gameMode = 'regular';
        startSnakeButton.disabled = true;
        startSnakeButtonLinearMode.disabled = true;
        gameSecuence(gameMode)
    });
    buttonsContainer.appendChild(startSnakeButton);

    const startSnakeButtonLinearMode = document.createElement('button');
    startSnakeButtonLinearMode.id = 'start-snake-button-linear';
    startSnakeButtonLinearMode.textContent = 'Start Linear Mode';
    startSnakeButtonLinearMode.addEventListener('click', function () {
        gameMode = 'linear';
        startSnakeButton.disabled = true;
        startSnakeButtonLinearMode.disabled = true;
        gameSecuence(gameMode)
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
    const divPuntosJugador = document.createElement('div');
    divPuntosJugador.id = 'div-puntos-jugador-snake';

    div.appendChild(divPuntosJugador);
    mostrarPuntos();
}