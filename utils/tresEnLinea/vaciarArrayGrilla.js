import { arrayGrilla } from "./arrayGrilla"

//Para volver a comenzar el juego, recorremos el array grilla y le damos el valor " "
//    * Luego, la
export const vaciarGrilla = ()=>{
    for (let i = 0; i < arrayGrilla.length; i++) {
        for (let j = 0; j < arrayGrilla[i].length; j++) {
            // dar el valor " " al arrayGrilla
            arrayGrilla[i][j]= " ";
        }
    }
}