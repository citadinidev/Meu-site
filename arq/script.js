
const iconeBurguer = document.querySelector('.icone-burguer');
const navMenuBurger = document.querySelector('.nav-menu-burger');

iconeBurguer.addEventListener('click', function () {
  iconeBurguer.querySelector('.linha1').classList.toggle("ativo");
  iconeBurguer.querySelector('.linha2').classList.toggle("ativo");
  iconeBurguer.querySelector('.linha3').classList.toggle("ativo");
  
  if (navMenuBurger.style.display !== 'block') {
    navMenuBurger.style.display = 'block';
  } else {
    navMenuBurger.style.display = 'none';
  }
});

function escondeNavMenuBurger() {
  iconeBurguer.click();
}