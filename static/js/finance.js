
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
    var temp = parseFloat(numBox.value);
    if (isNaN(temp) || temp < 0) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

function checkForInt(numBox, error) {
    var temp = parseInt(numBox.value);
    if (isNaN(temp) || temp < 0) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

function inputSubs(numBox, error) {
    checkForInt(numBox, error)
    removeSubs(numBox);
    var num = parseInt(numBox.value);
    for (var i = 0; i < num; i++) {
        var nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Name: ";
        nameLabel.setAttribute("class", "labeler")
        var sub = document.createElement("input");
        sub.setAttribute("type", "text");
        sub.setAttribute("class", "subscriptions");
        var moneyLabel = document.createElement("label");
        moneyLabel.innerHTML = "&emsp;$ "
        var money = document.createElement("input");
        money.setAttribute("type", "number");
        money.setAttribute("class", "subsMoney");
        //money.addEventListener("input", checkForInt(this, document.getElementById(moneyErrors)));
        moneyLabel.setAttribute("class", "labeler")
        var err = document.createElement("span");
        err.innerHTML = "Please enter a positive number";
        err.setAttribute("class", "error");
        var br = document.createElement("br");
        br.setAttribute("class", "subBreak");
        document.body.appendChild(nameLabel);
        document.body.appendChild(sub);
        document.body.appendChild(moneyLabel);
        document.body.appendChild(money);
        document.body.appendChild(err);
        document.body.appendChild(br);
    }
}

function removeSubs(numBox) {
    var labelList = Array.prototype.slice.call(document.getElementsByClassName("labeler"), 0);
    var subList = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    var moneyList = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    var breakList = Array.prototype.slice.call(document.getElementsByClassName("subBreak"), 0);
    var fullList = labelList.concat(subList, moneyList, breakList);
    
    for (var i = 0; i < moneyList.length; i++) { //shows how to get values
        console.log(subList[i].value + ": $" + moneyList[i].value);
    }

    for (var i = 0; i < fullList.length; i++) {
        fullList[i].remove();
    }
}

function inputExp(numBox,error){
    checkForInt(numBox, error)
    removeExps(numBox)
    var num1 = parseInt(numBox.value);
    for (var i = 0; i < num1; i++) {
        var nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Name: ";
        nameLabel.setAttribute("class", "labeler1")
        var exp = document.createElement("input");
        exp.setAttribute("type", "text");
        exp.setAttribute("class", "expenses");
        var moneyLabel = document.createElement("label");
        moneyLabel.innerHTML = "&emsp;$ "
        var money = document.createElement("input");
        money.setAttribute("type", "number");
        money.setAttribute("class", "expMoney");
        moneyLabel.setAttribute("class", "labeler1")
        var err = document.createElement("span");
        err.innerHTML = "Please enter a positive number";
        err.setAttribute("class", "error");
        var br = document.createElement("br");
        br.setAttribute("class", "expBreak");
        document.body.appendChild(nameLabel);
        document.body.appendChild(exp);
        document.body.appendChild(moneyLabel);
        document.body.appendChild(money);
        document.body.appendChild(err);
        document.body.appendChild(br);
}
}

function removeExps(numBox) {
    var labelList = Array.prototype.slice.call(document.getElementsByClassName("labeler1"), 0);
    var expList = Array.prototype.slice.call(document.getElementsByClassName("expenses"), 0);
    var moneyList = Array.prototype.slice.call(document.getElementsByClassName("expMoney"), 0);
    var breakList = Array.prototype.slice.call(document.getElementsByClassName("expBreak"), 0);
    var fullList = labelList.concat(expList, moneyList, breakList);
    
    for (var i = 0; i < moneyList.length; i++) { //shows how to get values
        console.log(expList[i].value + ": $" + moneyList[i].value);
    }

    for (var i = 0; i < fullList.length; i++) {
        fullList[i].remove();
    }
}


