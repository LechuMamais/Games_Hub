import { arrayGrilla } from "./arrayGrilla";


export const pintarGrilla = () => {
    const grilla = document.querySelector('#grilla-snake');
    grilla.innerHTML = ''

    // Y los cuadrados que la van a componer
    for (let i = 0; i < arrayGrilla.length; i++) {

        for (let j = 0; j < arrayGrilla[i].length; j++) {

            let cuadradito = document.createElement("div");
            cuadradito.id = i + "," + j;
            cuadradito.className = "snake-box";

            // Le vamos a dar una class según esté vacío, sea snake, o sea manzana.
                    // Para el futuro, agregaría la opcion de que sea muro.
            let kindOfBox = arrayGrilla[i][j].split(' ',1);
            //console.log(kindOfBox)
            if (kindOfBox == "") {
                cuadradito.classList.add('vacio')
            } else if (kindOfBox == "snake") {
                cuadradito.classList.add('snake')
            } else if (kindOfBox == "manzana") {
                cuadradito.classList.add('manzana')
            }

            grilla.appendChild(cuadradito);
        }
    };
}

