let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".nav__img")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".nav__img")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".nav__img")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})
//Envio de formulario MODAL
function submitForm(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        text: 'Ante cualquier duda contactate al +542615993000',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}