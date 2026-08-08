// ===================================
// ExpenseMate - Expense History
// ===================================

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses(expenses);

// ===================================
// Display Expenses
// ===================================

function displayExpenses(data){

    let table = document.getElementById("expenseTable");

    table.innerHTML = "";

    let total = 0;

    for(let i = 0; i < data.length; i++){

        total += Number(data[i].amount);

        let row = table.insertRow();

        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].category;
        row.insertCell(2).innerHTML = "₹" + data[i].amount;
        row.insertCell(3).innerHTML = data[i].date;
        row.insertCell(4).innerHTML = data[i].payment;
        row.insertCell(5).innerHTML = data[i].priority;

        row.insertCell(6).innerHTML =
        `<button class="delete-btn" onclick="deleteExpense(${i})">
        Delete
        </button>`;

    }

    document.getElementById("totalExpense").innerHTML = "₹" + total;

}

// ===================================
// Delete One Expense
// ===================================

function deleteExpense(index){

    if(confirm("Delete this expense?")){

        expenses.splice(index,1);

        localStorage.setItem("expenses",JSON.stringify(expenses));

        displayExpenses(expenses);

    }

}

// ===================================
// Delete All Expenses
// ===================================

function deleteAll(){

    if(confirm("Delete all expenses?")){

        localStorage.removeItem("expenses");

        expenses = [];

        displayExpenses(expenses);

    }

}

// ===================================
// Search Expense
// ===================================

function searchExpense(){

    let text = document.getElementById("search").value.toLowerCase();

    let filtered = expenses.filter(function(expense){

        return expense.name.toLowerCase().includes(text);

    });

    displayExpenses(filtered);

}

// ===================================
// Filter Category
// ===================================

function filterCategory(){

    let category = document.getElementById("filter").value;

    if(category == "All"){

        displayExpenses(expenses);

        return;

    }

    let filtered = expenses.filter(function(expense){

        return expense.category == category;

    });

    displayExpenses(filtered);

}
