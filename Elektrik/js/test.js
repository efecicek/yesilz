
function showResults() {
    var resultMessage = "Test Sonucu:<br>";
    
    // Soru 1
    var answer1 = document.forms["quiz"]["q1"].value;
    if (answer1 === "incorrect") {
        resultMessage += "Text " + "<br>";
    }

    // Soru 2
    var answer2 = document.forms["quiz"]["q2"].value;
    if (answer2 === "incorrect") {
        resultMessage += "Text " + "<br>";
    } 
    // Sonuçları göster
    
    document.getElementById("results").innerHTML = resultMessage;
}
