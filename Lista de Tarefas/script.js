let input = document.querySelector('#tarefa')
let btn = document.querySelector('#botao')
let lista = document.getElementsByTagName('select')[0]
let contem = []


btn.addEventListener('click', () => {
    if (input.value.length == 0 || contem.includes(input.value)){
        return alert("Error")
    }
    let item = document.createElement('option')
    let texto = document.createTextNode(input.value)
    lista.appendChild(item)
    item.appendChild(texto)
    contem.push(input.value)
    console.log(contem)
})