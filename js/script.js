window.addEventListener('load',  e => {
    var adres = document.getElementById("adres")
    var email1 = document.getElementById("email1")
    var telNumber = document.getElementById("tel")

    var interval = setInterval (function(){
        var telNumber = document.getElementById("tel")
        telNumber.style.opacity = Number(telNumber.style.opacity) + 0.1
        if(telNumber.style.opacity ==="1"){
            clearInterval(interval)
        }
    
    },200)
    
    var interval = setInterval (function(){
        var adres = document.getElementById("adres")
        adres.style.opacity = Number(adres.style.opacity) + 0.1
        if(adres.style.opacity ==="1"){
            clearInterval(interval)
        }
    
    },200)

    var interval = setInterval (function(){
        var email1 = document.getElementById("email1")
        email1.style.opacity = Number(email1.style.opacity) + 0.1
        if(email1.style.opacity ==="1"){
            clearInterval(interval)
        }
    
    },200)
})
