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
        user_role: document.getElementById('user_role').value,
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
