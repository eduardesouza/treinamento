function bloco1(){
    document.getElementById('divPrimeira').style.display = 'inline'
    document.getElementById('divSegunda').style.display = 'none'
}

function bloco2(){
    document.getElementById('divPrimeira').style.display = 'none'
    document.getElementById('divSegunda').style.display = 'inline'
}

function popup() {
    document.getElementById('popup').style.display = 'inline'
}

function fechar() {
    document.getElementById('popup').style.display = 'none'
}

var teste = 0
setInterval(piscar, 300)
function piscar(){
    if(teste<1){
        teste++
        document.getElementById('piscando').style.opacity = '1'
    } else{
        teste = 0
        document.getElementById('piscando').style.opacity = '0'
    }
}

