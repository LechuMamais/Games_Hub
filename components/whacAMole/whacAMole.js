import espacio from '../../utils/whacAMole/espacio';
import { showHeader } from '../header/header';
import './style.css'

export const whacAMole = () => {

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



    // Creamos el espacio donde se desarrollará el juego.
    let div = document.querySelector('#game_section');

    div.append(espacio);



}