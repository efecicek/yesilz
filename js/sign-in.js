var Signİnİsim = document.getElementById("Signİnİsim")
var SignİnEmail = document.getElementById("SignİnEmail")
var SignİnPassword = document.getElementById("SignİnPassword")
var SignİnButton = document.getElementById("SignİnButton")
var SignUpButton = document.getElementById("SignUpButton")
var SignUpButton2 = document.getElementById("SignUpButton2")
var LoginButton = document.getElementById("LoginButton")
var signupbutton3 = document.getElementById("signupbutton")
var signupbuttonisim = document.getElementById("signupbuttonisim")

var isim = Signİnİsim.value
var email = SignİnEmail.value
var password = SignİnPassword.value

SignUpButton.addEventListener('click',  e => {
    SignİnEmail.value = ""
    SignİnPassword.value = ""
    LoginButton.style.display = "none"
    SignUpButton2.style.display = "inline-block"
    Signİnİsim.style.display = "inline-block"
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
        signupbuttonisim.innerHTML = isim
        signupbuttonisim.style.color = "#30A2FF"
        signupbuttonisim.style.textTransform = "uppercase"
        signupbutton3.style.display = "none"
        signupbuttonisim.style.display = "inline-block"
    }   else if(SignİnEmail.value !== "" && SignİnPassword.value !== ""){
        alert("gmail veya şifre hatalı")
    }
})