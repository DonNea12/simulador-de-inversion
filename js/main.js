function simulador(){

    const campoNombre = document.getElementById("nombres") .value;
    const campoEmail = document.getElementById("email") .value;
    const campoInversion = parseInt(document.getElementById("inversion") .value);
    const campotiempo = parseInt(document.getElementById("tiempo") .value);
    const contPre = document.getElementById("pre");
    const contPost = document.getElementById("post");
    const showTiempo = document.getElementById("tiempo-show");
    const interesshow = document.getElementById("interes-show");
    const showNombre = document.getElementById("nombres-show");
    const showMail = document.getElementById("email-show");
    const showtotal = document.getElementById("total-show");
    const showganancia = document.getElementById("ganancia-show");

   
    let interes = 0
    let ganancia = 0

 
    showNombre.innerText = campoNombre;
    showMail.innerText = campoEmail
    
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");



    switch (campotiempo) {
        case 1:
            showTiempo.innerText = "12 Meses";
            interesshow.innerText = "0.8%";
            interes = (campoInversion * 0.008)*12;
            total = campoInversion + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;
        
        case 2:
            showTiempo.innerText = "24 Meses";
            interesshow.innerText = "1.3%";
            interes = (campoInversion * 0.013)*24;
            total = campoInversion + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;

        case 3:
            showTiempo.innerText = "36 Meses";
            interesshow.innerText = "1.7%";
            interes = (campoInversion * 0.017)*36;
            total = campoInversion + interes;
            showganancia.innerText = interes;
            showtotal.innerText = total;
            break;
    
        default:
            break;

    }
}

//Se selecciona el boton para el documento por su id

const boton = document.getElementById("simulador-btn");

//usamos el add event para escuchar el evento "click"

boton.addEventListener("click", simulador);

