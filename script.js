        document.getElementById("validationForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            clearErrors();

            // Get form input values
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            const email = document.getElementById("email").value;
            const userid = document.getElementById("userid").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            let valid = true;

            // Validate first name
            if (fname === "") {
                showError("fnameError", "First name is required");
                valid = false;
            }

            // Validate last name
            if (lname === "") {
                showError("lnameError", "Last name is required");
                valid = false;
            }

            // Email validation (simple check for "@" and ".")
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Password validation (simple length check)
            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            // Confirm Password validation
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // If validation passes
            alert("Form submitted successfully!");
        });

        // Function to validate email
        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
            return emailPattern.test(email);
        }
        
        // Function to show error message next to the input field
        function showError(elementId, message) {
            document.getElementById(elementId).textContent = message;
        }

        // Function to clear all error messages
        function clearErrors() {
            const errorMessages = document.getElementsByClassName("error-message");
            for (let i = 0; i < errorMessages.length; i++) {
                errorMessages[i].textContent = "";
            }
        }