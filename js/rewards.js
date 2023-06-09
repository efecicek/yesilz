var treeNumber = 0
var reward1 = document.getElementById("reward-1")
var reward2 = document.getElementById("reward-2")
var reward3 = document.getElementById("reward-3")
var reward4 = document.getElementById("reward-4")
var rewardbutton = document.getElementById("reward-button")
var a = 0
var b = 0
var c = 0
var d = 0

reward1.addEventListener('click', e =>{
    if(a == 0){
        alert("Tebrikler 1 ağaç bağışlama hakkı kazandınız.")
        treeNumber += 1
        a += 1
    }   else{
        alert("Bu ödülü zaten aldınız.")
    }
})
reward2.addEventListener('click', e =>{
    if(b == 0){
        alert("Tebrikler 3 ağaç bağışlama hakkı kazandınız.")
        treeNumber += 3
        b += 1
    }   else{
        alert("Bu ödülü zaten aldınız.")
    }
})
reward3.addEventListener('click', e =>{
    if(c == 0){
        alert("Tebrikler 7 ağaç bağışlama hakkı kazandınız.")
        treeNumber += 7
        c += 1
    }   else{
        alert("Bu ödülü zaten aldınız.")
    }
})
reward4.addEventListener('click', e =>{
    if(d == 0){
        alert("Tebrikler 10 ağaç bağışlama hakkı kazandınız.")
        treeNumber += 10
        d += 1
    }   else{
        alert("Bu ödülü zaten aldınız.")
    }
})

rewardbutton.addEventListener('click', e => {
    if(treeNumber > 0) {
        alert("Teşekkürler " + treeNumber + " ağaç bağışladınız")
        treeNumber = 0
    }   else{
        alert("Ağaç bağışlama hakkınız yok. Görevleri yaparak ağaç bağışlama hakkı kazanabilirsiniz.")
    }
})
