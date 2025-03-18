document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const termsCheckbox = document.getElementById("terms");

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent default submission

        // Validate Terms and Conditions checkbox
        if (!termsCheckbox.checked) {
            alert("You must agree to the Terms and Conditions to register.");
            return;
        }

        // Collect form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            phone_number: document.getElementById('phone_number').value.trim(),
            date_of_birth: document.getElementById('date_of_birth').value,
            id_number: document.getElementById('id_number').value.trim(),
            driver_license: document.getElementById('driver_license').value.trim() || null,
        };

        console.log("User Data:", formData);

        try {
            // Send data to the backend API
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                window.location.href = "/login.html"; // Redirect to login page
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred. Please try again.");
        }
    });
});
