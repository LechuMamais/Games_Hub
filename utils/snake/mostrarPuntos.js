import { puntosJugador } from "./puntosJugador";

export const mostrarPuntos = (puntos)=>{

    if (puntos === undefined){
        puntos = 0
    }
        
    
    const divJugadores = document.querySelector('#div-jugadores');
    divJugadores.innerHTML = '';
    
    const divJugador = document.createElement('div');
    divJugador.id = 'divJugador';
    divJugador.classList.add('div-jugador');
    divJugador.innerHTML = `
        <h3>Puntos: ${puntos}</h3>
    `

    divJugadores.append(divJugador);
}