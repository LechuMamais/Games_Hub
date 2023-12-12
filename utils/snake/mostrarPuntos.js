import { puntosJugador } from "./puntosJugador";

export const mostrarPuntos = (largo)=>{
    const divJugadores = document.querySelector('#div-jugadores');
    divJugadores.innerHTML = '';
    
    const divJugador = document.createElement('div');
    divJugador.id = 'divJugador';
    divJugador.classList.add('div-jugador');
    divJugador.innerHTML = `
        <h3>Puntos: ${largo}</h3>
    `

    divJugadores.append(divJugador);
}