const btnMenu = document.querySelector("#flotante");
const menuContent = document.querySelector(".menu-content");

btnMenu.addEventListener("click", ()=>{
    menuContent.classList.toggle("menu-active")
})
