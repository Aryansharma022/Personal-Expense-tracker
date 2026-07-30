// Show or Hide Password
function showPassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

// Login Function
function login() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if (email == "" || password == "") {

        alert("Please Enter Email and Password");

        return;

    }

    // Save email in browser
    localStorage.setItem("userEmail", email);

    // Success Message
    alert("Login Successful");

    // Open Dashboard
    window.location.href = "pro1.html";

}