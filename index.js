// ================================
// ExpenseMate Home Page
// ================================

// Welcome message (Only first time)

if(localStorage.getItem("welcomeShown") == null){

    alert("👋 Welcome to ExpenseMate!\nManage your expenses easily.");

    localStorage.setItem("welcomeShown","yes");

}

// Scroll to top when page reloads

window.onload = function(){

    window.scrollTo(0,0);

}

// Get Started Button

let startButton = document.querySelector(".btn");

startButton.onclick = function(){

    window.location.href = "pro.html";

}

// Login Button

let loginButton = document.querySelector(".login-btn");

loginButton.onclick = function(){

    window.location.href = "pro.html";

}
