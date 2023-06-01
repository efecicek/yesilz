var Signİnİsim = document.getElementById("Signİnİsim")
var SignİnEmail = document.getElementById("SignİnEmail")
var SignİnPassword = document.getElementById("SignİnPassword")
var SignİnButton = document.getElementById("SignİnButton")
var SignUpButton = document.getElementById("SignUpButton")
var SignUpButton2 = document.getElementById("SignUpButton2")
var LoginButton = document.getElementById("LoginButton")

var isim = Signİnİsim.value
var email = SignİnEmail.value
var password = SignİnPassword.value

SignUpButton.addEventListener('click',  e => {
    LoginButton.style.display = "none"
    SignUpButton2.style.display = "inline-block"
    Signİnİsim.style.display = "block"
})

SignİnButton.addEventListener('click',  e => {
    Signİnİsim.value = ""
    SignİnEmail.value = ""
    SignİnPassword.value = ""
    SignUpButton2.style.display = "none"
    LoginButton.style.display = "inline-block"
    Signİnİsim.style.display = "none"
})

SignUpButton2.addEventListener('click',  e => {
    if(Signİnİsim.value !== "" && SignİnEmail.value !== "" && SignİnPassword.value !== ""){
        isim = Signİnİsim.value
        email = SignİnEmail.value
        password = SignİnPassword.value
    }
})

LoginButton.addEventListener('click',  e => {
    if(email === SignİnEmail.value && password === SignİnPassword.value){
        alert("Hoşgeldiniz")
    }   else if(SignİnEmail.value !== "" && SignİnPassword.value !== ""){
        alert("gmail veya şifre hatalı")
    }
})