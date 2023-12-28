import { puntosJugador } from "./puntosJugador";

export const mostrarPuntos = (puntos)=>{

    if (puntos === undefined){
        puntos = 0
    }
        
    
    const divJugadores = document.querySelector('#div-puntos-jugador-snake');
    divJugadores.innerHTML = '';
    
    const divJugador = document.createElement('div');
    divJugador.id = 'divJugador';
    divJugador.innerHTML = `
        <h3>Puntos: ${puntos}</h3>
    `

    divJugadores.append(divJugador);
}