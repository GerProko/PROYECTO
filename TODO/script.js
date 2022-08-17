const btnShowLogin = 
document.querySelector("#show-login");
const btnHideLogin = 
document.querySelector("#close-btn");
const popup = 
document.querySelector("#popup");

btnShowLogin.addEventListener("click",()=>{
    popup.showModal();
})
btnHideLogin.addEventListener("click",()=>{
    popup.close();
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