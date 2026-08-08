// ===========================
// ExpenseMate Login Page
// ===========================

// Show / Hide Password

document.getElementById("showPassword").onclick = function(){

    let password = document.getElementById("password");

    if(password.type == "password"){

        password.type = "text";
        this.innerHTML = "🙈";

    }
    else{

        password.type = "password";
        this.innerHTML = "👁";

    }

}

// ===========================
// Sign Up
// ===========================

function signup(){

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value;

    if(name == "" || email == "" || password == ""){

        alert("Please fill all fields.");

        return;

    }

    if(password.length < 6){

        alert("Password must be at least 6 characters.");

        return;

    }

    localStorage.setItem("username",name);

    localStorage.setItem("userEmail",email);

    localStorage.setItem("userPassword",password);

    if(localStorage.getItem("budget") == null){

        localStorage.setItem("budget",20000);

    }

    alert("✅ Account Created Successfully!");

}

// ===========================
// Login
// ===========================

function login(){

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("userEmail");

    let savedPassword = localStorage.getItem("userPassword");

    if(email == "" || password == ""){

        alert("Please enter Email and Password.");

        return;

    }

    if(email == savedEmail && password == savedPassword){

        alert("Login Successful!");

        window.location.href = "pro1.html";

    }

    else{

        alert("Invalid Email or Password.");

    }

}

// ===========================
// Forgot Password
// ===========================

document.getElementById("forgotPassword").onclick = function(e){

    e.preventDefault();

    let pass = localStorage.getItem("userPassword");

    if(pass){

        alert("Your saved password is : " + pass);

    }

    else{

        alert("No account found. Please Sign Up first.");

    }

}
