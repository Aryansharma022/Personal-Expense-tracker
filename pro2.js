// Function to add expense

function addExpense(){

    // Get values from form

    let name = document.getElementById("name").value;

    let category = document.getElementById("category").value;

    let amount = document.getElementById("amount").value;

    let date = document.getElementById("date").value;

    let payment = document.getElementById("payment").value;

    let priority = document.getElementById("priority").value;

    let notes = document.getElementById("notes").value;


    // Validation

    if(name=="" || amount=="" || date==""){

        alert("Please Fill All Required Fields");

        return;

    }


    // Create Expense Object

    let expense={

        name:name,

        category:category,

        amount:amount,

        date:date,

        payment:payment,

        priority:priority,

        notes:notes

    };


    // Read Old Expenses

    let expenses=

    JSON.parse(localStorage.getItem("expenses"))

    || [];


    // Add New Expense

    expenses.push(expense);


    // Save Again

    localStorage.setItem(

    "expenses",

    JSON.stringify(expenses)

    );


    alert("Expense Added Successfully ✅");


    // Clear Form

    document.getElementById("expenseForm").reset();


    // Go Back to Dashboard

    window.location.href="pro1.html";

}