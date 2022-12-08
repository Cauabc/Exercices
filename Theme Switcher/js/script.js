const circulo = document.querySelector('.circle')
const container = document.querySelector('.container')
circulo.addEventListener('click', () =>{
    circulo.classList.toggle('active')
    container.classList.toggle('active')
})