/* 
    Autor: Hernández Zavala Carlos Rodrigo
    
    */

let xSize, ySize

let checkPantalla = () => {

    xSize = window.outerWidth;
    ySize = window.outerHeight;
    document.getElementById("cajaRes").innerHTML = " Ancho: " + xSize + " Alto: " + ySize
}
checkPantalla()
window.onresize = checkPantalla


