export const mostrarBotonesFlechas = () => {
        const arrowContainer = document.createElement("div");
        arrowContainer.id = 'arrow-container-snake';

        // Definimos las direcciones posibles
        const directions = ["left", "up", "right", "down"];

        directions.forEach(direction => {
            const button = document.createElement("button");
            button.className = "arrow " + direction;
            button.innerHTML = getArrowSymbol(direction);
            button.addEventListener("click", function () {
                // Los botones ya se muestran, ahora vamos a recuperar el valor y ver como meterlo en el game secuence
                arrowContainer.classList = direction

            });

            arrowContainer.appendChild(button);
            const game_section = document.querySelector('#game_section');
            game_section.appendChild(arrowContainer);
        });


    // Esta funcion es para ponerle el simbolo de las flechass
    function getArrowSymbol(direction) {
        switch (direction) {
            case "up":
                return "&#8593;";
            case "down":
                return "&#8595;";
            case "left":
                return "&#8592;";
            case "right":
                return "&#8594;";
            default:
                return "";
        }
    }

}