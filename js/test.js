
function showResults() {
    var resultMessage = "Test Sonucu:<br>";
    
    // Soru 1
    var answer1 = document.forms["quiz"]["q1"].value;
    if (answer1 === "incorrect") {
        resultMessage += "1. Sorunun cevabı '80' " + "<br>";
    }

    // Soru 2
    var answer2 = document.forms["quiz"]["q2"].value;
    if (answer2 === "incorrect") {
        resultMessage += "2. Sorunun cevabı '3 milyar' " + "<br>";
    }
    // Soru 3
    var answer2 = document.forms["quiz"]["q3"].value;
    if (answer2 === "incorrect") {
        resultMessage += "3. Sorunun cevabı '2050' " + "<br>";
    } 
    // Soru 4
    var answer2 = document.forms["quiz"]["q4"].value;
    if (answer2 === "incorrect") {
        resultMessage += "4. Sorunun cevabı 'Çin' " + "<br>";
    } 
    // Soru 5
    var answer2 = document.forms["quiz"]["q5"].value;
    if (answer2 === "incorrect") {
        resultMessage += "5. Sorunun cevabı '2040' " + "<br>";
    } 
    // Soru 6
    var answer2 = document.forms["quiz"]["q6"].value;
    if (answer2 === "incorrect") {
        resultMessage += "6. Sorunun cevabı '250' " + "<br>";
    } 
    // Soru 7
    var answer2 = document.forms["quiz"]["q7"].value;
    if (answer2 === "incorrect") {
        resultMessage += "7. Sorunun cevabı '130 L' " + "<br>";
    } 
    // Soru 8
    var answer2 = document.forms["quiz"]["q8"].value;
    if (answer2 === "incorrect") {
        resultMessage += "8. Sorunun cevabı '20 kg' " + "<br>";
    }
    // Soru 9 
    var answer2 = document.forms["quiz"]["q9"].value;
    if (answer2 === "incorrect") {
        resultMessage += "9. Sorunun cevabı '%80' " + "<br>";
    } 
    // Soru 10
    var answer2 = document.forms["quiz"]["q10"].value;
    if (answer2 === "incorrect") {
        resultMessage += "10. Sorunun cevabı '%20' " + "<br>";
    } 
    if (resultMessage === "Test Sonucu:<br>"){
        resultMessage += "Bravo! <br> Tüm soruları mükemmel bir şekilde tamamladın. <br> Doğanın koruyucusu sensin.<br>"
    }
    resultMessage += "Testimizi çözdüğün için teşekkürler. Enerjini koru doğayı koru. <br>"

    // Sonuçları göster
    
    document.getElementById("results").innerHTML = resultMessage;
}
