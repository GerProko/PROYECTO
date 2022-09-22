const btnShowLogin = 
document.querySelector("#show-login");
const btnHideLogin = 
document.querySelector("#close-btn");
const popup = 
document.querySelector("#popup");
let visible = false;
popup.addEventListener("click", (e)=> {
    if(visible && e.target.id == 'popup') {
        popup.close()
        visible = false;
    }
})

btnShowLogin.addEventListener("click",()=>{
    visible = true;
    popup.showModal();
})
btnHideLogin.addEventListener("click",()=>{
    popup.close();
})

const btnShowRegister = 
document.querySelector("#show-register");
const btnHideRegister = 
document.querySelector("#close-btn-register");
const popup_register = 
document.querySelector("#popup_register");
let visible1 = false;
popup_register.addEventListener("click", (e)=> {
    if(visible1 && e.target.id == 'popup_register') {
        popup_register.close()
        visible1 = false;
    }
})
btnShowRegister.addEventListener("click",()=>{
    visible1 = true;
    popup_register.showModal();
})
btnHideRegister.addEventListener("click",()=>{
    popup_register.close();
})

var navbar = document.getElementById("Header") //agarro el header identificandolo por el id y lo guardo en una variable

window.addEventListener("scroll", () =>{ //cuando scrolleo
    navbar.classList.toggle("sticky", window.scrollY > 0);  //le agrego la clase cuando scrollea
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})