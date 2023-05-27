window.addEventListener('load',  e => {
    var telNumber = document.getElementById("tel")
    var interval = setInterval (function(){
        telNumber.style.opacity = Number(telNumber.style.opacity) + 0.01
        if(telNumber.style.opacity ==="1"){
            clearInterval(interval)
        }
    
    },30)

    var telNumber = document.getElementById("tel")
    var x = -225
    var interval = setInterval(function() {
        telNumber.style.left = x + "px"
        x += 10
        if (x >= 25) {
            clearInterval(interval)
        }
    }, 40)
})

//telefon kısmı

const myTimeout1 = setTimeout(wait2seconds1, 1000);

function wait2seconds1() {
    var adres = document.getElementById("adres")
    var interval = setInterval (function(){
        adres.style.opacity = Number(adres.style.opacity) + 0.01
        if(adres.style.opacity ==="1"){
            clearInterval(interval)
        }
        
    },30)

    var adres = document.getElementById("adres")
    var y = -225
    var interval = setInterval(function() {
        adres.style.left = y + "px"
        y += 10
        if (y >= 25) {
            clearInterval(interval)
        }
    }, 40)
}


//adres kısmı

const myTimeout2 = setTimeout(wait2seconds2, 2000);

function wait2seconds2() {
    var email1 = document.getElementById("email1")
    var interval = setInterval (function(){
        email1.style.opacity = Number(email1.style.opacity) + 0.01
        if(email1.style.opacity ==="1"){
            clearInterval(interval)
        }
        
    },30)

    var email1 = document.getElementById("email1")
    var z = -225
    var interval = setInterval(function() {
        email1.style.left = z + "px"
        z += 10
        if (z >= 25) {
            clearInterval(interval)
        }
    }, 40)
}
//email kısmı

document.getElementById("button").addEventListener("click", function() {
    alert("Mesaj gönderme sistemimiz yapım aşamasındadır. Anlayışınız için teşekkürler.")
})
