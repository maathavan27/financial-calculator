
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
    var finances = document.getElementById("subboxes");
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
        finances.appendChild(nameLabel);
        finances.appendChild(sub);
        finances.appendChild(moneyLabel);
        finances.appendChild(money);
        finances.appendChild(err);
        finances.appendChild(br);
    }
    
}

function removeSubs(numBox) {
    var labelList = Array.prototype.slice.call(document.getElementsByClassName("labeler"), 0);
    subList = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    moneyList = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    var breakList = Array.prototype.slice.call(document.getElementsByClassName("subBreak"), 0);
    var fullList = labelList.concat(subList, moneyList, breakList);
    
    for (var i = 0; i < moneyList.length; i++) { //shows how to get values
        console.log(subList[i].value + ": $" + moneyList[i].value);
    }

    for (var i = 0; i < fullList.length; i++) {
        fullList[i].remove();
    }
}

function printValues() {
    var subList = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    var moneyList = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    for (var i = 0; i < moneyList.length; i++) { //shows how to get values
        console.log(subList[i].value + ": $" + moneyList[i].value);
    }
    console.log("abc");
}

var income, mortgage, rent, subList, moneyList, car, ins, phone, internet;
function store() {
    income = document.getElementById("salary").value;
    mortgage = document.getElementById("mortgageNum").value;
    rent = document.getElementById("rentNum").value;
    subList = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    moneyList = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    car = document.getElementById("carnum").value;
    ins = document.getElementById("insnum").value;
    phone = document.getElementById("phonenum").value;
    internet = document.getElementById("internetnum").value;

    sessionStorage.setItem('income', income);
    sessionStorage.setItem('mortgage', mortgage);
    sessionStorage.setItem('rent', rent);
    sessionStorage.setItem('subList', JSON.stringify(subList));
    sessionStorage.setItem('moneyList', JSON.stringify(moneyList));
    sessionStorage.setItem('car', car);
    sessionStorage.setItem('ins', ins);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('internet', internet);
    console.log('stored');
}