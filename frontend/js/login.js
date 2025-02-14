const URL = 'http://localhost:3000';

// JavaScript for Login Page
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(email, password);

        // Perform basic validation
        if (!email || !password) {
            alert('Please fill out both fields.');
            return;
        }

        try {
            const response = await  fetch(`${URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                window.location.href = data.redirect; // Redirect to dashboard
            } else {
                alert(data.message); // Show error message
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again later.');
        }
    });
  
});
