import intervaloGlovos from "./gameStarter";


export const gameFinisher = () => {
    /*const divTime = document.querySelector('#divTime');
    console.log(divTime);
    const divTimeSplit = divTime.textContent.split(" ");
    const time = divTimeSplit[1];
    console.log(time);*/

    // Volvemos a habilitar el boton de start game
    document.querySelector('#start-button').removeAttribute('disabled');

    // Conseguir el puntaje del jugador:

    let divScore = document.querySelector('#divScore');
    let divScoreSplit = divScore.textContent.split(" ");
    let puntos = parseInt(divScoreSplit[1]);


    alert('Juego terminado! tu puntuación ha sido de: ' +puntos);

    // Lo único que me falta hacer es que dejen de salir glovos!
    // cortar el intervalo de gameStarter

    // La solución fácil que se me ocurre es recargando todo el DOM
    location.reload()

    /*function detenerCreacionGlovos() {
        clearInterval(intervaloGlovos);
    };
    detenerCreacionGlovos();*/
    // Otra es que el intervalo dependa de que un booleano sea true, lo chequee por cada interval, por cada glovo que va crear.
    // y en gameFinisher cambiar el valor de ese booleano
    

}