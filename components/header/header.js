import { footer } from '../footer/footer';
import { showGamesList } from '../gamesList/gamesList';
import { home } from '../home/home';
import './style.css'


export const showHeader = (headerContainer) => {
    const header = document.createElement("header")
    header.id = "header";

    // El primer boton es para volver a home, el resto serán los 3 juegos


    const home_icon = document.createElement('img');
    home_icon.alt = 'Home';
    home_icon.id = 'home-icon';
    home_icon.src = 'Video-Game-Controller-Icon.png';
    //home_h2.textContent = 'Home';
    home_icon.onclick = () => {
        const divApp = document.querySelector('#app');
        divApp.innerHTML = "";
        home();
        footer(divApp);
    }

    header.append(home_icon);

    showGamesList(header);

    headerContainer.append(header);

}


