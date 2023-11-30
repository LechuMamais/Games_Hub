export const mostrarGlovo = ()=>{
    // Definimos el glovo
    const cielo = document.querySelector('#cielo')
    let glovo = document.createElement('img');
    glovo.src = './assets/whacAMole/glovo.png';
    glovo.alt = 'glovo';
    glovo.classList.add('glovo');

    // Le vamos a dar un width random entre ciertos parámetros, para que haya glovos más grandes y otros más chiquitos
    let glovoWidth = 50+(Math.floor(Math.random()*35));
    glovo.style.width = glovoWidth+'px';

    // Definimos su ubicación inicial en x, que será un random del ancho del cielo menos su ancho (para que no desborde)
    console.log(Math.floor(Math.random()*cielo.scrollWidth));
    glovo.style.marginLeft = (Math.floor(Math.random()*cielo.scrollWidth)-glovoWidth)+'px';

    cielo.append(glovo);
}