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