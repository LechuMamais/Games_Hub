import { mostrarGlovo } from "./mostrarGlovo";
import { timer } from "./timer";

export const gameStarter = () => {
    // Cada cuanto saldrá un glovo nuevo? será un numero aleatorio entre 250 y 750ms
    const gameSpeed = Math.floor(Math.random() * 250) + 250;

    
    setInterval(
        mostrarGlovo,
        gameSpeed
    );
    timer();

    // Apagamos el startButton, el botón que dispara esta función. Lo volveremos a habilitar en gameFinisher, cuando termine el juego
    document.querySelector('#start-button').setAttribute('disabled', '');

}