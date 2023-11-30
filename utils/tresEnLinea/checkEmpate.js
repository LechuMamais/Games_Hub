import { actualizarGrilla } from "./actualizarGrilla";
import { arrayGrilla } from "./arrayGrilla"
import { vaciarGrilla } from "./vaciarArrayGrilla";

export const checkEmpate = () => {
    const empate = arrayGrilla.toString().indexOf(" ");
    if (empate == -1){
        alert('Hay empate!');
        vaciarGrilla();
        actualizarGrilla();
    }
}