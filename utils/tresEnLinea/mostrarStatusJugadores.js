import { arrayJugadores } from "./arrayJugadores";

export const mostrarStatusJugadores = ()=>{
    const divJugadores = document.querySelector('#div-jugadores');
    divJugadores.innerHTML = '';
    
    const divJugador_1 = document.createElement('div');
    divJugador_1.id = 'divJugador_1';
    divJugador_1.classList.add('div-jugador');
    divJugador_1.innerHTML = `
        <h3>${arrayJugadores[0].letra}</h3>
        <h4>Jugador: ${arrayJugadores[0].jugador}</h4>
        <p>Partidas ganadas: ${arrayJugadores[0].partidasGanadas}</p>
    `
    const divJugador_2 = document.createElement('div');
    divJugador_2.id = 'divJugador_2';
    divJugador_2.classList.add('div-jugador');
    divJugador_2.innerHTML = `
        <h3>${arrayJugadores[1].letra}</h3>
        <h4>Jugador: ${arrayJugadores[1].jugador}</h4>
        <p>Partidas ganadas: ${arrayJugadores[1].partidasGanadas}</p>
    `

    divJugadores.append(divJugador_1);
    divJugadores.append(divJugador_2);
    
}