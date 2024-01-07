import { arrayJugadores } from "./arrayJugadores";

export const mostrarStatusJugadores = ()=>{
    const divJugadores = document.querySelector('#div-jugadores');
    divJugadores.innerHTML = '';
    // Si el div está vacío, vamos a 
    
    const divJugador_1 = document.createElement('div');
    divJugador_1.id = 'divJugador_1';
    divJugador_1.classList.add('div-jugador');
    // Lo siguiente es para aplicarle estilos en particular cuando sea el turno de ese jugador.
    if(arrayJugadores[0].actual === true){
        divJugador_1.classList.add('div-jugador-actual');
        //divJugador_1.style.boxShadow = '0px 0px 59px 8px rgba(0,0,0,0.8)';
    }
    divJugador_1.innerHTML = `
        <h3>${arrayJugadores[0].letra}</h3>
        <h4>Jugador: ${arrayJugadores[0].jugador}</h4>
        <p>Partidas ganadas: ${arrayJugadores[0].partidasGanadas}</p>
    `

    const divJugador_2 = document.createElement('div');
    divJugador_2.id = 'divJugador_2';
    divJugador_2.classList.add('div-jugador');
    if(arrayJugadores[1].actual === true){
        divJugador_2.classList.add('div-jugador-actual');
        //divJugador_2.style.boxShadow = '0px 0px 59px 8px rgba(0,0,0,0.8)';
    }
    divJugador_2.innerHTML = `
        <h3>${arrayJugadores[1].letra}</h3>
        <h4>Jugador: ${arrayJugadores[1].jugador}</h4>
        <p>Partidas ganadas: ${arrayJugadores[1].partidasGanadas}</p>
    `

    divJugadores.append(divJugador_1);
    divJugadores.append(divJugador_2);
    
}