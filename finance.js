
window.onload = function() {
    document.getElementById("finances").reset();
}

function showQuestion(question) {
    question.style.display = "block";
}

function hideQuestion(question) {
    question.style.display = "none";
}

function checkForNegative(numBox, error) {
    console.log(numBox.value)
    var temp = parseFloat(numBox.value);
    if (isNaN(temp) || temp < 0) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}