import { arrayJugadores } from "./arrayJugadores"

export const mostrarTurno = ()=>{
    if(arrayJugadores[0].actual = true){
        let divJugador_1 = document.querySelector('#divJugador_1')
        divJugador_1.innerHTML += `<p>Es tu turno!</p>`
    }else if(arrayJugadores[1].actual = true){
        let divJugador_2 = document.querySelector('#divJugador_2')
        divJugador_2.innerHTML += `<p>Es tu turno!</p>`
    }
}