// Script para o carrossel automatico
var radio = document.querySelector('.nav-dot')
var cont = 1

document.querySelector('#img-dot-1').checked = true

setInterval(() => {
    proximaImg()
}, 3000);

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}