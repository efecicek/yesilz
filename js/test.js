
function showResults() {
    var resultMessage = "<p>Test Sonucu:</p><br>";
    
    // Soru 1
    var answer1 = document.forms["quiz"]["q1"].value;
    if (answer1 !== "correct") {
        resultMessage += "<p>1. Sorunun cevabı '80' </p>" + "<br>";
    }
    
    // Soru 2
    var answer2 = document.forms["quiz"]["q2"].value;
    if (answer2 !== "correct") {
        resultMessage += "<p>2. Sorunun cevabı '3 milyar' </p>" + "<br>";
    }
    // Soru 3
    var answer3 = document.forms["quiz"]["q3"].value;
    if (answer3 !== "correct") {
        resultMessage += "<p>3. Sorunun cevabı '2050' </p>" + "<br>";
    } 
    // Soru 4
    var answer4 = document.forms["quiz"]["q4"].value;
    if (answer4 !== "correct") {
        resultMessage += "<p>4. Sorunun cevabı 'Çin' </p>" + "<br>";
    } 
    // Soru 5
    var answer5 = document.forms["quiz"]["q5"].value;
    if (answer5 !== "correct") {
        resultMessage += "<p>5. Sorunun cevabı '2040' </p>" + "<br>";
    } 
    // Soru 6
    var answer6 = document.forms["quiz"]["q6"].value;
    if (answer6 !== "correct") {
        resultMessage += "<p>6. Sorunun cevabı '250' </p>" + "<br>";
    } 
    // Soru 7
    var answer7 = document.forms["quiz"]["q7"].value;
    if (answer7 !== "correct") {
        resultMessage += "<p>7. Sorunun cevabı '130 L' </p>" + "<br>";
    } 
    // Soru 8
    var answer8 = document.forms["quiz"]["q8"].value;
    if (answer8 !== "correct") {
        resultMessage += "<p>8. Sorunun cevabı '20 kg' </p>" + "<br>";
    }
    // Soru 9 
    var answer9 = document.forms["quiz"]["q9"].value;
    if (answer9 !== "correct") {
        resultMessage += "<p>9. Sorunun cevabı '%80'</p> " + "<br>";
    } 
    // Soru 10
    var answer10 = document.forms["quiz"]["q10"].value;
    if (answer10 !== "correct") {
        resultMessage += "<p>10. Sorunun cevabı '%20' </p>" + "<br>";
    }
    if (resultMessage === "<p>Test Sonucu:</p><br>"){
        resultMessage += "<p>Bravo! <br> Tüm soruları mükemmel bir şekilde tamamladın. <br> Doğanın koruyucusu sensin.</p><br>"
    }
    resultMessage += "<p>Testimizi çözdüğün için teşekkürler. Enerjini koru doğayı koru. </p><br>"

    // Sonuçları göster
    
    document.getElementById("results").innerHTML = resultMessage;
}
