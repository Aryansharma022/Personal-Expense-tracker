let email = localStorage.getItem("userEmail");

if(email == null){
    email = "Guest User";
}

document.getElementById("email").innerHTML = email;

let username = email.split("@")[0];

document.getElementById("name").innerHTML = username;

function logout(){

    localStorage.removeItem("userEmail");

    window.location.href = "index.html";

}
