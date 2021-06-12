
var income, mortgage, rent, subList, moneyList, car, ins, phone, internet;

window.onload = function(){
    income = localStorage.getItem('income');
    mortgage = localStorage.getItem('mortgage');
    rent = localStorage.getItem('rent');
    subList = JSON.parse(localStorage.getItem('subList'));
    moneyList = JSON.parse(localStorage.getItem('moneyList'));
    car = localStorage.getItem('car');
    ins = localStorage.getItem('ins');
    phone = localStorage.getItem('phone');
    internet = localStorage.getItem('internet');
}



function printValues() {
    console.log("income=" + income);
    console.log("mortgage=" + mortgage);
    console.log("rent=" + rent);
    console.log("Subscriptions:")
    for (var i = 0; i < moneyList.length; i++) {
        console.log("    " + subList[i].value + ": $" + moneyList[i].value);
    }
    console.log("car payments=" + car);
    console.log("car insurance=" + ins);
    console.log("phone payments=" + phone);
    console.log("internet=" + internet);
}