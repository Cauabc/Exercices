const hamburguer = document.querySelector('.hamburguer')
const navbar = document.querySelector('.navbar')
const bar = document.getElementsByClassName('bar')[0]
const bar2 = document.getElementsByClassName('bar')[1]
const bar3 = document.getElementsByClassName('bar')[2]

hamburguer.addEventListener('click', ()=>{
    bar.classList.toggle('active')
    bar2.classList.toggle('active')
    bar3.classList.toggle('active')
    navbar.classList.toggle('navmenu')
})