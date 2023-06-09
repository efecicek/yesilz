var treeNumber = 0
var reward1 = document.getElementById("reward-1")
var reward2 = document.getElementById("reward-2")
var reward3 = document.getElementById("reward-3")
var reward4 = document.getElementById("reward-4")
var rewardbutton = document.getElementById("reward-button")

reward1.addEventListener('click', e =>{
    alert("Tebrikler 1 ağaç bağışlama hakkı kazandınız.")
    treeNumber += 1
})
reward2.addEventListener('click', e =>{
    alert("Tebrikler 3 ağaç bağışlama hakkı kazandınız.")
    treeNumber += 3
})
reward3.addEventListener('click', e =>{
    alert("Tebrikler 7 ağaç bağışlama hakkı kazandınız.")
    treeNumber += 7
})
reward4.addEventListener('click', e =>{
    alert("Tebrikler 10 ağaç bağışlama hakkı kazandınız.")
    treeNumber += 10
})

rewardbutton.addEventListener('click', e => {
    if(treeNumber > 0) {
        alert("Teşekkürler " + treeNumber + " ağaç bağışladınız")
        treeNumber = 0
    }   else{
        alert("Ağaç bağışlama hakkınız yok. Görevleri yaparak ağaç bağışlama hakkı kazanabilirsiniz.")
    }
})
