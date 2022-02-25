/* 
   Autor: Carlos Rodrigo Hernández Zavala

    */

const segundo = 1000,
      minutos = segundo * 60,
      horas = minutos * 60,
      dias = horas * 24

let countDown = () => {


    let fechaCounter = new Date('Dec 31, 2022 00:00:00').getTime()
        fechaActual =  new Date().getTime(),
        
        tiempoRestante = fechaCounter - fechaActual;
  
        diasRes = Math.floor(tiempoRestante / dias),
        horasRes = Math.floor((tiempoRestante % dias) / horas),
        minutosRes = Math.floor((tiempoRestante % horas) / minutos),
        segundosRes = Math.floor((tiempoRestante % minutos) / segundo)

        document.getElementById("dias").innerHTML = diasRes.toString().padStart(3,"0")
        document.getElementById("horas").innerHTML = horasRes.toString().padStart(2,"0")
        document.getElementById("minutos").innerHTML = minutosRes.toString().padStart(2,"0")
        document.getElementById("segundos").innerHTML = segundosRes.toString().padStart(2,"0")

    
        //console.log(diasRes,horasRes,minutosRes,segundosRes)
}

setInterval(() => {
    countDown()
}, segundo)


