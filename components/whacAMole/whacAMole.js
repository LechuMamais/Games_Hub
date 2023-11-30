import espacio from '../../utils/whacAMole/espacio';
import { mostrarGlovo } from '../../utils/whacAMole/mostrarGlovo';
import './style.css'

export const whacAMole = () => {

    // Creamos el espacio donde se desarrollará el juego.
    let div = document.querySelector('#game_section');

    div.append(espacio);


    
}