
var income, mortgage, rent, subList, moneyList, car, ins, phone, internet;

window.onload = function(){
    console.log("onload");
    income = localStorage.getItem('income');
    mortgage = localStorage.getItem('mortgage');
    rent = localStorage.getItem('rent');
    subList = JSON.parse(localStorage.getItem('subList'));
    moneyList = JSON.parse(localStorage.getItem('moneyList'));
    car = localStorage.getItem('car');
    ins = localStorage.getItem('ins');
    phone = localStorage.getItem('phone');
    internet = localStorage.getItem('internet');
    loan = localStorage.getItem('loan');
    expenseList = JSON.parse(localStorage.getItem('expenseList'));
    expmoneyList = JSON.parse(localStorage.getItem('expmoneyList'));
    printValues();
    makeTable();
}

function printValues() {
    console.log("Monthly Income: $" + income);
    console.log("Mortgage: $" + mortgage);
    console.log("Rent: $" + rent);
    console.log("Subscriptions:")
    for (var i = 0; i < moneyList.length; i++) {
        console.log("    " + subList[i] + ": $" + moneyList[i]);
    }
    console.log("Car Payments: $" + car);
    console.log("Car Insurance: $" + ins);
    console.log("Phone Payments: $" + phone);
    console.log("Internet Cost: $" + internet);
    console.log("Loan Payments: $" + loan);
    console.log("Other Expenses:");
    for (var i = 0; i < expmoneyList.length; i++) {
        console.log("    " + expenseList[i] + ": $" + expmoneyList[i]);
    }
}

function makeTable() {
    var names1 = ['Monthly Income', 'Mortage', 'Rent'];
    var money1 = [income, mortgage, rent];
    console.log("slen=" + subList.length);
    console.log("elen=" + expenseList.length);
    console.log(subList);
    if (subList.length > 0) {
        names1 = names1.concat('Subscriptions')
        money1 = money1.concat("");
        console.log(names1);
    }
    var names2 = ['Car Payments', 'Car Insurance', 'Phone Payments', 'Internet Cost', 'Loan Payments'];
    var money2 = [car, ins, phone, internet, loan];
    if (expenseList.length > 0) {
        names2 = names1.concat('Other Expenses')
        money2 = money1.concat("");
    }
    for (var i = 0; i < subList.length; i++) {
        subList[i] = '    ' + subList[i];
    }
    for (var i = 0; i < expenseList.length; i++) {
        expenseList[i] = '    ' + expenseList[i];
    }
    var names = names1.concat(subList, names2, expenseList);
    var money = money1.concat(moneyList, money2, expmoneyList);

    var totalOut = 0;
    var table = document.getElementById("results");
    var row, left, right, temp;
    for (var i = 0; i < names.length; i++) {
        temp = parseFloat(money[i]);
        if (!isNaN(temp) && temp > 0) {
            row = table.insertRow(-1);
            left = row.insertCell(0);
            left.innerHTML = names[i];
            right = row.insertCell(1);
            right.innerHTML = '$' + money[i];
            totalOut += temp;
        }
    }
    totalOut -= income;
    document.getElementById("totalIn").innerHTML = income;
    document.getElementById("totalOut").innerHTML = totalOut;
    document.getElementById("diff").innerHTML = income - totalOut;
    if (income < totalOut) {
        document.getElementById("negative").innerHTML = "-";
    }
    

}