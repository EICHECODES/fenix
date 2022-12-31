
setInterval (carregar)
function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    msg.innerHTML = `Agora é ${hora} : ${minutos} : ${segundos}`

    if(hora>=0 && hora<12){
        img.src ='fotomanha.png'
    document.body.style.backgroundColor ='#02afe3' 
    }else if(hora>=12 && hora<18){
        img.src ='fototarde.png'
        document.body.style.backgroundColor ='#eb7302'
    }else{
        img.src ='fotonoite.png'
        document.body.style.backgroundColor ='#032a85'
    }
}