
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