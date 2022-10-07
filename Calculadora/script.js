
function apagar(){
    let res = document.getElementById('res')
    res.innerHTML = ''
}
function apagar1(){
    let res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
    
}
function mudar(l){
    let res = document.getElementById('res')
    res.innerHTML += l
}
function calcular(){
    let res = document.getElementById('res').innerHTML
    if(res){
        document.getElementById('res').innerHTML = eval(res)
        
    } 
}