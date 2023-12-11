import { arrayGrilla } from '../../utils/tresEnLinea/arrayGrilla';
import { handleClick } from '../../utils/tresEnLinea/handleClick';
import { mostrarStatusJugadores } from '../../utils/tresEnLinea/mostrarStatusJugadores';
import './style.css'


export const tresEnLinea = () => {
    let div = document.querySelector('#game_section');
    // Creamos la grilla
    const grilla = document.createElement('div');
    grilla.id = 'grilla';

    // Y los cuadrados que la van a componer
    for (let i = 0; i < arrayGrilla.length; i++) {

        for (let j = 0; j < arrayGrilla[i].length; j++) {

            let cuadradito = document.createElement("div");
            cuadradito.id = i + "," + j;
            cuadradito.className = "cuadrado";

            grilla.appendChild(cuadradito);
        }
    };



    // Mostramos la grilla
    div.appendChild(grilla);


    // Función para manejar el evento onclick, y llamar a la función handleClick (importada)
    function llamarHandleClick(id) {
        handleClick(id)
    };
    // Obtener todos los elementos con la clase "cuadrado"
    var cuadrados = document.querySelectorAll(".cuadrado");
    // Agregar eventListener a cada cuadrado
    cuadrados.forEach(function (cuadrado) {
        cuadrado.addEventListener("click", function () {
            llamarHandleClick(cuadrado.id);
        });
    });



    //Mostrar estatus de Jugadores:
    const divJugadores = document.createElement('div');
    divJugadores.id = 'div-jugadores';
    
    div.appendChild(divJugadores);
    mostrarStatusJugadores();


}