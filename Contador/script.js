function contar(){
    let v1 = document.getElementById('num1')
    let v2 = document.getElementById('num2')
    let n1 = Number(v1.value)
    let n2 = Number(v2.value)
    let res = document.querySelector('#res')
    let c = n1
    res.innerHTML = ''
    if (v1.value.length == 0 || v2.value.length == 0){
        alert('Confirme se os números foram digitados corretamente')
    } else if (n1 <= n2){
        alert('O primeiro número não pode ser menor ou igual ao segundo!')
    } else{
        while (c >= n2){
            res.innerHTML += ` ${c}`
            c--
        }
    }
    
}