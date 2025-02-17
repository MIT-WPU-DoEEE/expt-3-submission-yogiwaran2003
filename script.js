console.log("script.js is loaded");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var isValid = true;

        // Name validation (only letters, min 3 characters)
        var name = document.getElementById("name").value.trim();
        if (name === "" || !/^[A-Za-z ]{3,}$/.test(name)) {
            document.getElementById("nameError").textContent = "Enter a valid name (min 3 letters).";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Phone number validation (10 digits)
        var phone = document.getElementById("phone").value.trim();
        if (phone === "" || !/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        // Email validation
        var email = document.getElementById("email").value.trim();
        if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Zip code validation (5-6 digits)
        var zip = document.getElementById("zip").value.trim();
        if (zip === "" || !/^\d{5,6}$/.test(zip)) {
            document.getElementById("zipError").textContent = "Enter a valid zip code (5-6 digits).";
            isValid = false;
        } else {
            document.getElementById("zipError").textContent = "";
        }

        if (isValid) {
            submitForm();
        }
    });
});