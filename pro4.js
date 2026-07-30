let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let total = 0;
let highest = 0;

expenses.forEach(function(expense){

    total += Number(expense.amount);

    if(Number(expense.amount) > highest){

        highest = Number(expense.amount);

    }

});

document.getElementById("totalExpense").innerHTML = "₹" + total;

document.getElementById("totalTransaction").innerHTML = expenses.length;

document.getElementById("highestExpense").innerHTML = "₹" + highest;