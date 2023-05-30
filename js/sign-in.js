var Signİnİsim = document.getElementById("Signİnİsim")
var Signİnİsimdiv = document.getElementById("Signİnİsim-div")
var SignİnEmail = document.getElementById("SignİnEmail")
var SignİnPassword = document.getElementById("SignİnPassword")
var SignİnButton = document.getElementById("SignİnButton")
var SignUpButton = document.getElementById("SignUpButton")
var SignIn = document.getElementById("Sign-In")
var SignUp = document.getElementById("Sign-Up")


SignIn.addEventListener('click', e => {
    if(Signİnİsimdiv.style.display === "block"){
        Signİnİsimdiv.style.display = "none"
    }
})

SignUp.addEventListener('click', e => {
    if(Signİnİsimdiv.style.display === "none"){
        Signİnİsimdiv.style.display = "block"
    }
})

var isim = Signİnİsim.value
var email = SignİnEmail.value
var password = SignİnPassword.value

SignUpButton.addEventListener('click',  e => {
    if(Signİnİsim.value !== "" && SignİnEmail.value !== "" && SignİnPassword.value !== ""){
        isim = Signİnİsim.value
        email = SignİnEmail.value
        password = SignİnPassword.value
    }
})

SignİnButton.addEventListener('click',  e => {
    if(Signİnİsim.value !== "" && SignİnEmail.value !== "" && SignİnPassword.value !== "" && email === SignİnEmail.value && password === SignİnPassword.value){
        alert("Hoşgeldiniz")
    }   else if(SignİnEmail.value !== "" && SignİnPassword.value !== ""){
        alert("gmail veya şifre hatalı")
    }
})