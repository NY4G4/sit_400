// Register Page JavaScript Functionality
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate registration success (this would involve server interaction in a real-world scenario)
    alert(`Registration successful!\nWelcome, ${fullName}!`);

    // Reset form fields
    document.getElementById('register-form').reset();
});
