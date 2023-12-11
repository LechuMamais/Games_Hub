import { snake } from '../snake/snake';
import { tresEnLinea } from '../tresEnLinea/tresEnLinea';
import { whacAMole } from '../whacAMole/whacAMole';
import './style.css'

const gamesList = document.createElement('ul');
gamesList.id = 'games_ul';

const game_1_li = document.createElement('li');
const game_1_h2 = document.createElement('h2');
game_1_h2.textContent = 'Tres en linea';
game_1_li.append(game_1_h2);
game_1_li.onclick = ()=>{
    let game_section = document.querySelector('#game_section');
    game_section.innerHTML = '';
    tresEnLinea();
}

const game_2_li = document.createElement('li');
const game_2_h2 = document.createElement('h2');
game_2_h2.textContent = 'Whac A Mole';
game_2_li.append(game_2_h2);
game_2_li.onclick = ()=>{
    let game_section = document.querySelector('#game_section');
    game_section.innerHTML = '';
    whacAMole();
}

const game_3_li = document.createElement('li');
const game_3_h2 = document.createElement('h2');
game_3_h2.textContent = 'Snake';
game_3_li.append(game_3_h2);
game_3_li.onclick = ()=>{
    let game_section = document.querySelector('#game_section');
    game_section.innerHTML = '';
    snake();
}

gamesList.append(game_1_li);
gamesList.append(game_2_li);
gamesList.append(game_3_li);

export default gamesList;