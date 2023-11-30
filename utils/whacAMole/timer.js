import { gameFinisher } from "./gameFinisher";

export const timer = () => {
    let divTime = document.querySelector('#divTime');

    let divTimeSplit = divTime.textContent.split(" ");
    let time = parseInt(divTimeSplit[1]);
    setInterval(function () {
        time--;
        divTime.textContent = divTimeSplit[0] + " " + time;

        // Si se termina el tiempo, perdes y se activa la funcion game finisher
        if (time == 0) {
            gameFinisher();
        }
    }, 1000)


}