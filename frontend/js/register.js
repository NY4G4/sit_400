document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone_number: document.getElementById('phone_number').value,
        date_of_birth: document.getElementById('date_of_birth').value,
        id_number: document.getElementById('id_number').value,
        driver_license: document.getElementById('driver_license').value || null,
        
    };

    console.log('User Data:', formData);

    // Here you would send the data to the backend API
    // Example: 
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
});

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const termsCheckbox = document.getElementById("terms");

    registerForm.addEventListener("submit", (e) => {
        if (!termsCheckbox.checked) {
            e.preventDefault();
            alert("You must agree to the Terms and Conditions to register.");
        }
    });
});
