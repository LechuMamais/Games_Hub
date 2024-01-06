import { arrayGrilla } from '../../utils/tresEnLinea/arrayGrilla';
import { handleClick } from '../../utils/tresEnLinea/handleClick';
import { mostrarStatusJugadores } from '../../utils/tresEnLinea/mostrarStatusJugadores';
import { showHeader } from '../header/header';
import './style.css'


export const tresEnLinea = () => {

    // Esto es para ocultar lo que haya:    
    const divApp = document.querySelector('#app');
    divApp.innerHTML = "";
    // Poner el Header aca. el header tiene el boton a la home y el gamesList
    showHeader(divApp);
    // Y ahora creamoe la section donde se mostrará el juego
    const game_section = document.createElement('section');
    game_section.id = 'game_section';
    divApp.append(game_section);

    
    // -------------------------------------------          COMIENZA EL JUEGO!          ------------------------------------------------- //
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