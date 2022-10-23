const circulo = document.querySelector('.circle')
let teste = document.getElementById('circulo')
let ativo = true
const body = document.querySelector('.container')

circulo.addEventListener('click', () =>{
    if (!ativo){
        teste.style.left = '60px'
        ativo = true
        body.style.backgroundColor = '#fff'
    }
    else{
        teste.style.left = '0px'
        ativo = false
        body.style.backgroundColor = '#292C35'
        
    }
})