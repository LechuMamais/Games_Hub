import { mostrarGlovo } from '../../utils/whacAMole/mostrarGlovo';
import './style.css'

export const whacAMole = () =>{

    // Creamos el espacio donde se desarrollará el juego.
    let div = document.querySelector('#game_section');

    const espacio = document.createElement('div');
    espacio.id = 'espacio-whac';
    const info = document.createElement('ul');
    info.id = 'info-whac';
    const divScore = document.createElement('li');
    divScore.textContent = 'Puntos: ';
    const divTime = document.createElement('li');
    divTime.textContent = 'Tiempo: ';

    const startButton = document.createElement('button');
    startButton.id = 'start-button';
    startButton.textContent = 'Start';

    info.appendChild(divScore);
    info.appendChild(divTime);
    info.appendChild(startButton);

    const cielo = document.createElement('div');
    cielo.id = 'cielo';
    const nubesContainer = document.createElement('div');
    nubesContainer.id = 'nubes-container'
    for (let i = 0; i < 9; i++) {
        let nube = document.createElement('div');
        nube.classList.add('nube');
        nube.id = 'nube_'+i;
        nubesContainer.appendChild(nube);
    }
    cielo.appendChild(nubesContainer);

    espacio.appendChild(info);
    espacio.appendChild(cielo);

    div.append(espacio);



    mostrarGlovo();
}