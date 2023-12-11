import gamesList from './components/header/header';
import { tresEnLinea } from './components/tresEnLinea/tresEnLinea';
import './style.css'

const divApp = document.querySelector('#app');
divApp.append(gamesList);
const game_section = document.createElement('section');
game_section.id = 'game_section';
divApp.append(game_section);

tresEnLinea();