// JavaScript for Hire a Vehicle Page

document.addEventListener('DOMContentLoaded', () => {
    const hireForm = document.getElementById('hire-form');

    hireForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const vehicle = document.getElementById('vehicle').value;
        const hireDate = document.getElementById('hire-date').value;
        const returnDate = document.getElementById('return-date').value;

        if (!vehicle || !hireDate || !returnDate) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        if (new Date(hireDate) >= new Date(returnDate)) {
            alert('Return date must be after hire date.');
            return;
        }

        // Simulate form submission success
        alert(`Vehicle hired successfully!\n\nVehicle: ${vehicle}\nHire Date: ${hireDate}\nReturn Date: ${returnDate}`);

        // Clear form
        hireForm.reset();
    });
});
