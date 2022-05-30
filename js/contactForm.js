const nombre= document.getElementById("name")
const email= document.getElementById("email")
const telefono= document.getElementById("telefono")
const form= document.getElementById("form")
const parrafo= document.getElementById("warnings")
const buttonContactForm = document.getElementById("button-contact-form")
const formSection = document.querySelector("#form");

buttonContactForm.addEventListener('click', () => {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(telefono.value.length < 8){
        warnings += `El telefono ingresado no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})