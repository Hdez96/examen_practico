/* 
    Autor: Hernández Zavala Carlos Rodrigo
    
    */
const tiempo = 5000

let cambioHex = () => {

    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.getElementById("cajaColores").style.backgroundColor = "#" + randomColor
    document.getElementById("HexText").innerHTML = "#" + randomColor
}


setInterval(() => {
    cambioHex()
}, tiempo)

