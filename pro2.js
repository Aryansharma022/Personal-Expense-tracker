// ======================================
// ExpenseMate - Add Expense
// ======================================

// Set today's date automatically

window.onload = function(){

    let today = new Date().toISOString().split("T")[0];

    document.getElementById("date").value = today;

}

// ======================================
// Add Expense
// ======================================

function addExpense(){

    let name = document.getElementById("name").value.trim();

    let category = document.getElementById("category").value;

    let amount = document.getElementById("amount").value;

    let date = document.getElementById("date").value;

    let payment = document.getElementById("payment").value;

    let priority = document.getElementById("priority").value;

    let notes = document.getElementById("notes").value.trim();

    // Validation

    if(name=="" || amount=="" || date==""){

        alert("Please fill all required fields.");

        return;

    }

    if(Number(amount)<=0){

        alert("Amount must be greater than 0.");

        return;

    }

    // Get existing expenses

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Create Expense Object

    let expense = {

        name:name,

        category:category,

        amount:amount,

        date:date,

        payment:payment,

        priority:priority,

        notes:notes

    };

    // Save Expense

    expenses.push(expense);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    alert("✅ Expense Added Successfully!");

    // Clear Form

    document.getElementById("expenseForm").reset();

    // Set today's date again

    let today = new Date().toISOString().split("T")[0];

    document.getElementById("date").value = today;

}

// ======================================
// Prevent Negative Amount
// ======================================

document.getElementById("amount").addEventListener("input",function(){

    if(this.value < 0){

        this.value = "";

    }

});

// ======================================
// Character Limit for Notes
// ======================================

document.getElementById("notes").addEventListener("input",function(){

    if(this.value.length > 200){

        alert("Maximum 200 characters allowed.");

        this.value = this.value.substring(0,200);

    }

});
