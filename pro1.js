// Monthly Budget
const monthlyBudget = 20000;

// Get saved email from Local Storage
let userEmail = localStorage.getItem("userEmail");

// Show email on dashboard
document.getElementById("username").innerHTML = userEmail;

// Get expense list from Local Storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Variables
let totalExpense = 0;

// Table body
let table = document.getElementById("recentExpense");

// Loop through all expenses
expenses.forEach(function(expense){

    totalExpense += Number(expense.amount);

    let row = table.insertRow();

    row.insertCell(0).innerHTML = expense.name;
    row.insertCell(1).innerHTML = expense.category;
    row.insertCell(2).innerHTML = "₹" + expense.amount;

});

// Update cards
document.getElementById("expense").innerHTML = "₹" + totalExpense;

let remaining = monthlyBudget - totalExpense;

document.getElementById("remaining").innerHTML = "₹" + remaining;

document.getElementById("saving").innerHTML = "₹" + remaining;

// Update progress bar
document.getElementById("budgetBar").value = totalExpense;

// Budget warning
if(totalExpense > monthlyBudget){

    alert("⚠ You have exceeded your monthly budget!");

}
function updateDateTime(){

    let now = new Date();

    document.getElementById("dateTime").innerHTML =
    "📅 " + now.toLocaleDateString() +
    " | 🕒 " + now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime,1000);