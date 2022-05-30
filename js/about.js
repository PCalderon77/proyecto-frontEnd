const buttonContactForm = document.getElementById("button-bajar")
const formSection = document.querySelector("#galeria");
buttonContactForm.addEventListener('click', () => {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})