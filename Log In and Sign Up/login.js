// JavaScript for Login Page
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform basic validation
        if (!email || !password) {
            alert('Please fill out both fields.');
            return;
        }

        // Simulate login logic
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        // Redirect or show message upon successful login
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    });
});
