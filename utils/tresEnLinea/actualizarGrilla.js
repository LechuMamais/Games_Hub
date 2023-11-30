import { arrayGrilla } from "./arrayGrilla";

// Función para volver a pintar la grilla
export const actualizarGrilla = () => {
    for (let i = 0; i < arrayGrilla.length; i++) {
        for (let j = 0; j < arrayGrilla[i].length; j++) {

            // Esto pinta el valor del array en el documento: las X y las O
            let cuadradito = document.getElementById(i + "," + j);
            cuadradito.textContent = arrayGrilla[i][j];
            if (cuadradito.textContent == "X") {
                cuadradito.classList.add('color-jugador-uno');
                cuadradito.classList.remove('color-jugador-dos');
            } else if(cuadradito.textContent == "O"){
                cuadradito.classList.add('color-jugador-dos');
                cuadradito.classList.remove('color-jugador-uno');
            } 

        }
    }
}