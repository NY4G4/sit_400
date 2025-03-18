document.addEventListener("DOMContentLoaded", function () {
    const rentalDaysInput = document.getElementById("rental-days");
    const totalPriceDisplay = document.getElementById("total-price");
    const confirmBookingBtn = document.getElementById("confirm-booking");
    const paymentMethodSelect = document.getElementById("payment-method");

    // Sample vehicle data (In real implementation, fetch this from backend)
    const vehiclePricePerDay = 5000; // Example price per day (adjust based on vehicle)

    // Function to update the total price
    function updateTotalPrice() {
        const rentalDays = parseInt(rentalDaysInput.value) || 1; // Default to 1 day if invalid
        const totalPrice = rentalDays * vehiclePricePerDay;
        totalPriceDisplay.textContent = `KES ${totalPrice.toLocaleString()}`;
    }

    // Event listener for rental days input
    rentalDaysInput.addEventListener("input", updateTotalPrice);

    // Handle booking confirmation
    confirmBookingBtn.addEventListener("click", function (e) {
        e.preventDefault();
        
        const rentalDays = parseInt(rentalDaysInput.value) || 1;
        const paymentMethod = paymentMethodSelect.value;

        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        const bookingDetails = {
            vehicle_id: "ABC123", // Placeholder, replace with actual vehicle ID from backend
            rental_days: rentalDays,
            total_price: rentalDays * vehiclePricePerDay,
            payment_method: paymentMethod
        };

        console.log("Booking Details:", bookingDetails);

        // Send booking data to backend
        fetch("/api/bookVehicle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingDetails)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Booking successful!");
                window.location.href = "confirmation.html"; // Redirect to confirmation page
            } else {
                alert("Booking failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while processing your booking.");
        });
    });

    // Initialize total price on page load
    updateTotalPrice();
});
