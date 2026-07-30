let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let table = document.getElementById("historyTable");

function displayExpenses() {
    function searchExpense(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#historyTable tr");

rows.forEach(function(row){

let text=row.innerText.toLowerCase();

if(text.includes(input)){

row.style.display="";

}

else{

row.style.display="none";

}

});

}

    table.innerHTML = "";

    expenses.forEach(function(expense, index){

        table.innerHTML += `
        <tr>
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.date}</td>
            <td>${expense.payment}</td>
            <td>${expense.priority}</td>
            <td>
                <button onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

}

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();

}

displayExpenses();
function deleteAllExpenses(){

    let confirmDelete = confirm("Are you sure you want to delete all expenses?");

    if(confirmDelete){

        localStorage.removeItem("expenses");

        expenses = [];

        displayExpenses();

        alert("All expenses deleted successfully.");

    }

}