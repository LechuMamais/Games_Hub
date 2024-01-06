import { home } from './components/home/home';
import './style.css'

const divApp = document.querySelector('#app');
/*divApp.append(gamesList);
const game_section = document.createElement('section');
game_section.id = 'game_section';
divApp.append(game_section);*/

home(divApp);