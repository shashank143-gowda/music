function signup() {
    let name = document.getElementById("signup-name").value;
    let password = document.getElementById("signup-password").value;

    if (localStorage.getItem(name)) {
        alert("User already exists!");
        return;
    }

    localStorage.setItem(name, JSON.stringify({ password }));
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page
}

function login() {
    let name = document.getElementById("login-name").value;
    let password = document.getElementById("login-password").value;

    let user = JSON.parse(localStorage.getItem(name));
    if (!user || user.password !== password) {
        alert("Invalid login credentials!");
        return;
    }

    localStorage.setItem("loggedInUser", name);
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to the home page
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href = "login.html"; // Redirect to login page
}

// Check if user is logged in on other pages
function checkAuth() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html"; // Redirect if not logged in
    }
}

// Function to display welcome message on home page for 2 seconds with animation
function displayWelcomeMessage() {
    let username = localStorage.getItem("loggedInUser");
    if (username) {
        let welcomeContainer = document.createElement("div");
        welcomeContainer.textContent = `Welcome To shashank's music album site❤️`;
        welcomeContainer.style.position = "fixed";
        welcomeContainer.style.top = "0";
        welcomeContainer.style.left = "30%";
        welcomeContainer.style.width = "10%";
       
        welcomeContainer.style.color = "yellow";
        welcomeContainer.style.padding = "10px 0";
        welcomeContainer.style.textAlign = "center";
        welcomeContainer.style.fontSize = "18px";
        welcomeContainer.style.zIndex = "1000";
        welcomeContainer.style.animation = "fadeInOut 4s ease-in-out";
        document.body.prepend(welcomeContainer);

        // Remove the message after 2 seconds
        setTimeout(() => {
            welcomeContainer.remove();
        }, 2000);

        // Add animation style
        let style = document.createElement("style");
        style.innerHTML = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(-20px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Call the function when the home page loads
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("index.html")) {
        displayWelcomeMessage();
    }
});
