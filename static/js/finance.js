
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
    removeSubs();
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

function removeSubs() {
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

function inputExp(numBox, error){
    checkForInt(numBox, error)
    removeExps()
    var num1 = parseInt(numBox.value);
    var other = document.getElementById("otherboxes");
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
        other.appendChild(nameLabel);
        other.appendChild(exp);
        other.appendChild(moneyLabel);
        other.appendChild(money);
        other.appendChild(err);
        other.appendChild(br);
    }
}

function removeExps() {
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

function printValues() {
    var subList = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    var moneyList = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    for (var i = 0; i < moneyList.length; i++) { //shows how to get values
        console.log(subList[i].value + ": $" + moneyList[i].value);
    }
    console.log("abc");
}

var income, mortgage, rent, subList, moneyList, car, ins, phone, internet, loan, expenseList, expmoneyList;
function store() {
    income = document.getElementById("salary").value;
    mortgage = document.getElementById("mortgageNum").value;
    rent = document.getElementById("rentNum").value;
    var tempSub = Array.prototype.slice.call(document.getElementsByClassName("subscriptions"), 0);
    subList = [];
    for (var i = 0; i < tempSub.length; i++) {
        subList.push(tempSub[i].value);
    }
    var tempMoney = Array.prototype.slice.call(document.getElementsByClassName("subsMoney"), 0);
    moneyList = [];
    for (var i = 0; i < tempMoney.length; i++) {
        moneyList.push(tempMoney[i].value);
    }
    car = document.getElementById("carnum").value;
    ins = document.getElementById("insnum").value;
    phone = document.getElementById("phonenum").value;
    internet = document.getElementById("internetnum").value;
    loan = document.getElementById("loannum").value;
    var tempExpenses = Array.prototype.slice.call(document.getElementsByClassName("expenses"), 0);
    expenseList = []
    for (var i = 0; i < tempExpenses.length; i++) {
        expenseList.push(tempExpenses[i].value);
    }
    var tempExpMoney = Array.prototype.slice.call(document.getElementsByClassName("expMoney"), 0);
    expmoneyList = []
    for (var i = 0; i < tempExpMoney.length; i++) {
        expmoneyList.push(tempExpMoney[i].value);
    }
    localStorage.setItem('income', income);
    localStorage.setItem('mortgage', mortgage);
    localStorage.setItem('rent', rent);
    localStorage.setItem('subList', JSON.stringify(subList));
    localStorage.setItem('moneyList', JSON.stringify(moneyList));
    localStorage.setItem('car', car);
    localStorage.setItem('ins', ins);
    localStorage.setItem('phone', phone);
    localStorage.setItem('internet', internet);
    localStorage.setItem('loan', loan);
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
    localStorage.setItem('expmoneyList', JSON.stringify(expmoneyList));
    console.log('stored');
}

