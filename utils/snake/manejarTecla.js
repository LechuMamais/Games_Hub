// Función que manejaaba el evento keydown. Lo puse directamente en el gameSequence por no poder exportar correctamente los valores.

var direction = 'right'
export function manejarTecla(event) {

    switch (event.key) {
        case 'ArrowRight':
            direction = 'right';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        default:
            // Si la tecla no es una flecha, no hacemos nada
            return;
    }
    return direction
}
export default direction;
