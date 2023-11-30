import { gameStarter } from "./gameStarter";

const espacio = document.createElement('div');
espacio.id = 'espacio-whac';
const info = document.createElement('ul');
info.id = 'info-whac';
const divScore = document.createElement('li');
divScore.id = 'divScore';
divScore.textContent = 'Puntos: 0';
const divTime = document.createElement('li');
divTime.textContent = 'Tiempo: 15';
divTime.id = 'divTime';

const startButton = document.createElement('button');
startButton.id = 'start-button';
startButton.textContent = 'Start';
startButton.addEventListener('click', function () {
    // Que salga un glovo cada x tiempo
    gameStarter()

});

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
    nube.id = 'nube_' + i;
    nubesContainer.appendChild(nube);
}
cielo.appendChild(nubesContainer);

espacio.appendChild(info);
espacio.appendChild(cielo);
export default espacio;