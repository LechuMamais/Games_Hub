import { showGamesList } from '../gamesList/gamesList';
import { hero } from '../hero/hero';
import './style.css'

export const home = (homeContainer) => {
    if (!homeContainer) {
        homeContainer = document.querySelector('#app')
    }

    homeContainer.innerHTML = '';
    //homeContainer.style.display = 'none';
    const home = document.createElement('div');
    home.id = 'home';

    hero(home);

    showGamesList(home);

    homeContainer.append(home);
}