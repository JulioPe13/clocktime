let hora = document.querySelector(".hora");
let minuto = document.querySelector(".minuto");
let segundo = document.querySelector(".segundo");
let ampm = document.querySelector(".ampm");
let p = document.querySelector(".mes")


//Variables para la funciones 
function actualizarHora (){

    //Obtener fechas
    let fechaActual = new Date();

    //variables 
    let h = fechaActual.getHours();
    let m = fechaActual.getMinutes();
    let s = fechaActual.getSeconds();
    let months = fechaActual.getMonth();
    let day = fechaActual.getDate();

    //arreglo para los meses
    let meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      //Variables 
      hora.textContent= h;
      minuto.textContent=m;
      segundo.textContent=s;

      let nombreMesActual = meses[months];
      p.textContent = `${nombreMesActual} / ${day}`

}
actualizarHora();

setInterval(actualizarHora, 1000);



const imgactualizar =() => {
const body = document.querySelector("body");
let fechaActual = new Date();
let horaactual = fechaActual.getHours();

if (horaactual >= 19 || horaactual < 6){
    body.style.backgroundImage = "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/panama/Panama_Ciudad_0218_c9f9fbc0-60b3-439b-b75a-1a0c87f76622.jpg')"
}else{
    body.style.backgroundImage ="url('https://www.repsol.com/content/dam/repsol-corporate/es/sostenibilidad/naturaleza%20bosque%20y%20lago.jpg.transform/rp-rendition-md/image.jpg')"
};

// DETERMINAR pm / am


if(horaactual >=12 && horaactual < 23){
    ampm.textContent ='pm'
}else{
   ampm.textContent = 'am'    
}
}

imgactualizar();