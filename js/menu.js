//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const menu = document.getElementById('menu');

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
  menu.classList.toggle('menu-open');
});