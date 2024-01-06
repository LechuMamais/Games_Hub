import './style.css';
import {tresEnLinea} from '../../components/tresEnLinea/tresEnLinea'
import { whacAMole } from '../whacAMole/whacAMole';
import { snake } from '../snake/snake';

// Esta función recibe como parámetro el contenedor donde se mostrará la lista de juegos

export const showGamesList = (gamesListContainer) => {
    //Creamos una lista con los juegos. Cada elemento será un botón que al clickarlo se limpie el game-section, y se ejecute el componente de ese juego.
    const gamesList = document.createElement('ul');
    gamesList.id = 'games_ul';
    const divApp = document.querySelector('#app');

    const game_1_li = document.createElement('li');
    const game_1_h2 = document.createElement('h2');
    game_1_h2.textContent = 'Tres en linea';
    game_1_li.append(game_1_h2);
    game_1_li.onclick = () => {
        divApp.innerHTML = "";        
        tresEnLinea()
    }

    const game_2_li = document.createElement('li');
    const game_2_h2 = document.createElement('h2');
    game_2_h2.textContent = 'Whac A Mole';
    game_2_li.append(game_2_h2);
    game_2_li.onclick = () => {
        divApp.innerHTML = "";
        whacAMole();
    }

    const game_3_li = document.createElement('li');
    const game_3_h2 = document.createElement('h2');
    game_3_h2.textContent = 'Snake';
    game_3_li.append(game_3_h2);
    game_3_li.onclick = () => {
        divApp.innerHTML = "";
        snake();
    }

    // Mostramos los botones, y lo insertamos en el contenedor (que se ingresa como parámetro)
    gamesList.append(game_1_li);
    gamesList.append(game_2_li);
    gamesList.append(game_3_li);
    gamesListContainer.append(gamesList)
}