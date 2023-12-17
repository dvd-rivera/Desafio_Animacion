const menuContainer = document.getElementById("menu-container")
const openMenuBtn = document.getElementById("menu-open-btn")
const closeMenuBtn = document.getElementById("menu-close-btn")
const mainSection = document.getElementById("mainSection")
const nav = document.getElementById('nav');

const mainHeight = mainSection.offsetHeight

const btns = [openMenuBtn, closeMenuBtn]



btns.forEach(el => {
    el.addEventListener("click",  toggleMenu)
})

function toggleMenu() {
    menuContainer.classList.toggle("open")
}

const setNavHeight = () => {
    if (window.innerWidth > 765) {
      nav.style.height = mainSection.offsetHeight + 'px';
    } else {
      nav.style.height = 'auto';
    }
  };
setNavHeight();
window.addEventListener('resize', setNavHeight);