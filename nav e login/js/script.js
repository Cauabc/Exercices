
const hamburguer = document.querySelector('.navbar-hamburguer')
const navbar = document.querySelector('.navbar-menu')
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active')
    navbar.classList.toggle('active')
})

const btnSignIn = document.querySelector('.signin')
const btnSignUp = document.querySelector('.signup')
const btnColor = document.querySelector('.btncolor')
const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const btnend = document.querySelector('.btnend')


btnSignUp.addEventListener('click', ()=>{
    form1.style.left = '100%'
    form2.style.left = '0'
    btnColor.style.left = '73px'
    btnend.style.top = '100px'
})

btnSignIn.addEventListener('click', ()=>{
    form1.style.left = '0'
    form2.style.left = '-100%'
    btnColor.style.left = '-20px'
    btnend.style.top = '10px'
})
