function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('Verifique a integridade dos dados inseridos')
    } 
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'criancahomem.png')
                //criança
            } else if (idade >=11 && idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
                //jovem
            } else if (idade >= 21 && idade <51){
                img.setAttribute('src', 'adultohomem.png')
                //adulto
            } else if (idade >= 51){
                img.setAttribute('src', 'homemvelho.png')
                //idoso
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <11){
                img.setAttribute('src', 'criancamulher.png')
                //criança
            } else if (idade >=11 && idade < 21){
                img.setAttribute('src', 'jovemmulher.png')
                //jovem
            } else if (idade >= 21 && idade <51){
                img.setAttribute('src', 'adultomulher.png')
                //adulto
            } else if (idade >= 51 ){
                img.setAttribute('src', 'mulhervelha.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
        
