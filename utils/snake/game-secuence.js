export const gameSecuence = () => {
    console.log('game secuence activado');

    // Por un lado necesitamos una variable que pueda tomar 4 valores en funcion de las flechas que se toquen;
    const direction = "right";
    // Función que maneja el evento keydown
    function manejarTecla(event) {
        // Verificar si la tecla presionada es una tecla de flecha
        if (event.key.startsWith("Arrow")) {
            // Almacenar la dirección de la flecha presionada
            //direction = event.key;
            
            // Imprimir la dirección en la consola (puedes hacer lo que quieras con este valor)
            console.log("Flecha presionada: " + direction);
        }
        console.log("Flecha presionada: " + direction);
    }

    // Agregar un escucha de eventos para el evento keydown
    document.addEventListener("keydown", manejarTecla);


    // Necesitamos una función que cada x tiempo haga lo siguiente:
    //      repintar el mapa -> mostrar una nueva manzana si no hay ninguna. 
    //      Para esto necesitamos una nueva function que detecte en qué espacios puede ir(que no haya ni snake ni muros)

    //      Chequear que no se haya dado contra un muro o con sigo misma


    //      repintar el snake -> alargarla si es necesario (y repintar los puntos para que se actualicen)
    //


    //


}