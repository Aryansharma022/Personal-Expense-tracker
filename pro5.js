// ======================================
// ExpenseMate - Profile
// ======================================

// Load Saved Profile

window.onload = function(){

    document.getElementById("name").value =
    localStorage.getItem("username") || "";

    document.getElementById("email").value =
    localStorage.getItem("userEmail") || "";

    document.getElementById("phone").value =
    localStorage.getItem("phone") || "";

    document.getElementById("budget").value =
    localStorage.getItem("budget") || 20000;

}

// ======================================
// Save Profile
// ======================================

function saveProfile(){

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let budget =
    document.getElementById("budget").value;

    if(name=="" || email=="" || budget==""){

        alert("Please fill all required fields.");

        return;

    }

    localStorage.setItem("username",name);

    localStorage.setItem("userEmail",email);

    localStorage.setItem("phone",phone);

    localStorage.setItem("budget",budget);

    alert("✅ Profile Updated Successfully!");

}

// ======================================
// Reset Profile
// ======================================

function resetProfile(){

    if(confirm("Reset all profile details?")){

        document.getElementById("name").value="";

        document.getElementById("email").value="";

        document.getElementById("phone").value="";

        document.getElementById("budget").value=20000;

        localStorage.removeItem("username");

        localStorage.removeItem("userEmail");

        localStorage.removeItem("phone");

        localStorage.setItem("budget",20000);

        alert("Profile Reset Successfully.");

    }

}

// ======================================
// Dashboard
// ======================================

function dashboard(){

    window.location.href="pro1.html";

}

// ======================================
// Logout
// ======================================

function logout(){

    if(confirm("Do you want to logout?")){

        window.location.href="pro.html";

    }

}
