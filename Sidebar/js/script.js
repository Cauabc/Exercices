const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
const item5 = document.getElementById('item5')
const item0 = document.getElementById('item0')
const item6 = document.getElementById('item6')
const bordersearch = document.querySelector('.active')
const perfil = document.querySelector('.name')

let ativo = false
menu.addEventListener('click', ()=>{
    if (!ativo){
        item1.style.display = 'none'
        item2.style.display = 'none'
        item3.style.display = 'none'
        item4.style.display = 'none'
        item5.style.display = 'none'
        item0.style.display = 'none'
        item6.style.display = 'none'
        sidebar.style.width = '90px'
        bordersearch.classList.toggle('active')
        menu.style.left = '25px'
        menu.style.top = '25px'
        perfil.style.display = 'none'
        ativo = true
    }
    else{
        item1.style.display = 'block'
        item2.style.display = 'block'
        item3.style.display = 'block'
        item4.style.display = 'block'
        item5.style.display = 'block'
        item0.style.display = 'block'
        item6.style.display = 'block'
        sidebar.style.width = '280px'
        bordersearch.classList.toggle('active')
        menu.style.left = '220px'
        menu.style.top = '25px'
        perfil.style.display = 'block'
        ativo = false
    }

})