let hamburguer = document.querySelector('.hamburguer')
let navMenu = document.querySelector('.nav-menu')
let main = document.querySelector('main')
let hamburger = document.querySelector('.hamburguer');
let body = document.querySelector('body');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('menu-open');
})


