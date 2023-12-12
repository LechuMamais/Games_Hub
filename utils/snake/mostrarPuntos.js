import { puntosJugador } from "./puntosJugador";

export const mostrarPuntos = (largo)=>{
let puntos;
    if (largo === undefined){
        puntos = 0
    }else{
        puntos = largo-3
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