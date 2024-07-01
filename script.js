// Select the login form element
let loginForm = document.querySelector(".my-form");

// Add an event listener to the form's submit event
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
// Select the email and password input fields
    let email = document.getElementById("email");
    let password = document.getElementById("password");

// Log the email and password values to the console
    console.log("Email:", email.value);
    console.log("Password:", password.value);

// Clear the email and password input fields
    email.value = ""
    password.value = ""
})