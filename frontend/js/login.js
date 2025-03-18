document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    const loginData = {
        email: email,
        password: password,
        userType: userType
    };

    console.log('Login Data:', loginData);

    // Simulating login API call
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");

            // Redirect based on user type
            if (userType === "owner") {
                window.location.href = "registerVehicles.html";
            } else {
                window.location.href = "hireVehicles.html";
            }
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    })
    .catch(error => console.error('Error:', error));
});
