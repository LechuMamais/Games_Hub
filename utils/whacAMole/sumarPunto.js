export const sumarPunto = () =>{
    let divScore = document.querySelector('#divScore');
    let divScoreSplit = divScore.textContent.split(" ");
    let puntos = parseInt(divScoreSplit[1])+1;
    divScore.textContent = divScoreSplit[0]+" "+puntos;
}