document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var isValid = true;

        // Validation (same as before)
        var name = document.getElementById("fullName").value.trim();
        if (name === "" || !/^[A-Za-z ]{3,}$/.test(name)) {
            document.getElementById("nameError").textContent = "Enter a valid name (min 3 letters).";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Email validation
        var email = document.getElementById("email").value.trim();
        if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Phone validation
        var phone = document.getElementById("phone").value.trim();
        if (phone === "" || !/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        if (isValid) {
            var formData = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                dob: document.getElementById("dob").value,
                address: document.getElementById("address").value,
                location: document.getElementById("location").value,
                country: document.getElementById("country").value,
                zip: document.getElementById("zip").value
            };

            fetch("submit.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert("Registration successful!");
                    document.getElementById("registrationForm").reset();
                } else {
                    alert("Error: " + data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        }
    });
});
