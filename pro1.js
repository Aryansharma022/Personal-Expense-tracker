// ================================
// ExpenseMate Dashboard
// ================================

// Get User Name

let username = localStorage.getItem("username");

if(username == null){

    username = "User";

}

document.getElementById("username").innerHTML = username;


// ================================
// Monthly Budget
// ================================

let monthlyBudget = Number(localStorage.getItem("budget"));

if(monthlyBudget == 0){

    monthlyBudget = 20000;

}

document.getElementById("budget").innerHTML = "₹" + monthlyBudget;


// ================================
// Expenses
// ================================

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let totalExpense = 0;

let table = document.getElementById("recentExpense");

for(let i=0;i<expenses.length;i++){

    totalExpense = totalExpense + Number(expenses[i].amount);

}


// Show Last 5 Expenses

let start = 0;

if(expenses.length > 5){

    start = expenses.length - 5;

}

for(let i=start;i<expenses.length;i++){

    let row = table.insertRow();

    row.insertCell(0).innerHTML = expenses[i].name;

    row.insertCell(1).innerHTML = expenses[i].category;

    row.insertCell(2).innerHTML = "₹" + expenses[i].amount;

    row.insertCell(3).innerHTML = expenses[i].date;

}


// ================================
// Update Cards
// ================================

document.getElementById("expense").innerHTML = "₹" + totalExpense;

let remaining = monthlyBudget - totalExpense;

document.getElementById("remaining").innerHTML = "₹" + remaining;

document.getElementById("saving").innerHTML = "₹" + remaining;


// ================================
// Progress Bar
// ================================

let percentage = (totalExpense / monthlyBudget) * 100;

if(percentage > 100){

    percentage = 100;

}

document.getElementById("budgetBar").value = percentage;

document.getElementById("budgetText").innerHTML =

percentage.toFixed(1) + "% Budget Used";


// ================================
// Budget Alert
// ================================

if(totalExpense > monthlyBudget){

    alert("⚠ Warning! You have exceeded your monthly budget.");

}


// ================================
// Date & Time
// ================================

function updateDateTime(){

    let now = new Date();

    document.getElementById("dateTime").innerHTML =

    "📅 " +

    now.toLocaleDateString() +

    " | 🕒 " +

    now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime,1000);


// ================================
// Daily Saving Tips
// ================================

let tips = [

"💰 Save at least 20% of your monthly income.",

"🛒 Make a shopping list before buying.",

"☕ Avoid unnecessary daily spending.",

"📊 Track every expense regularly.",

"🎯 Set a monthly saving goal."

];

let random = Math.floor(Math.random() * tips.length);

document.querySelector(".quote p").innerHTML = tips[random];
