
var income, mortgage, rent, subList, moneyList, car, ins, phone, internet;

window.onload = function(){
    income = sessionStorage.getItem('income');
    mortgage = sessionStorage.getItem('mortgage');
    rent = sessionStorage.getItem('rent');
    subList = JSON.parse(sessionStorage.getItem('subList'));
    moneyList = JSON.parse(sessionStorage.getItem('moneyList'));
    car = sessionStorage.getItem('car');
    ins = sessionStorage.getItem('ins');
    phone = sessionStorage.getItem('phone');
    internet = sessionStorage.getItem('internet');
}



function printValues() {
    console.log(income);
    for (var i = 0; i < moneyList.length; i++) {
        console.log(subList[i].value + ": $" + moneyList[i].value);
    }
}