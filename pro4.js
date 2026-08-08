// ======================================
// ExpenseMate - Reports
// ======================================

// Get Expenses

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Get Monthly Budget

let budget = Number(localStorage.getItem("budget")) || 20000;

// Variables

let totalExpense = 0;

let categoryTotals = {};

// Calculate Total Expense & Category Wise Expense

for(let i=0;i<expenses.length;i++){

    totalExpense += Number(expenses[i].amount);

    let category = expenses[i].category;

    if(categoryTotals[category]){

        categoryTotals[category] += Number(expenses[i].amount);

    }

    else{

        categoryTotals[category] = Number(expenses[i].amount);

    }

}

// Remaining Budget

let remaining = budget - totalExpense;

// Update Cards

document.getElementById("totalExpense").innerHTML = "₹" + totalExpense;

document.getElementById("budget").innerHTML = "₹" + budget;

document.getElementById("remaining").innerHTML = "₹" + remaining;

document.getElementById("transactions").innerHTML = expenses.length;

// =============================
// Category Table
// =============================

let table = document.getElementById("categoryTable");

for(let category in categoryTotals){

    let row = table.insertRow();

    row.insertCell(0).innerHTML = category;

    row.insertCell(1).innerHTML = "₹" + categoryTotals[category];

}

// =============================
// Progress Bar
// =============================

let percentage = (totalExpense / budget) * 100;

if(percentage > 100){

    percentage = 100;

}

document.getElementById("budgetBar").value = percentage;

document.getElementById("percentage").innerHTML =
"Budget Used : " + percentage.toFixed(1) + "%";

// =============================
// Warning
// =============================

if(totalExpense > budget){

    alert("⚠ You have exceeded your Monthly Budget!");

}
