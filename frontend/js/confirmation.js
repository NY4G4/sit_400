document.addEventListener("DOMContentLoaded", function () {
    // Simulate retrieving booking details (this should be fetched from backend in a real app)
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

    if (!bookingDetails) {
        document.querySelector(".confirmation-container").innerHTML = "<h2>Error: No booking found.</h2>";
        return;
    }

    // Populate booking details on the page
    document.getElementById("vehicle-name").textContent = bookingDetails.vehicle_name || "N/A";
    document.getElementById("rental-days").textContent = bookingDetails.rental_days || "N/A";
    document.getElementById("total-price").textContent = `KES ${bookingDetails.total_price.toLocaleString()}`;
    document.getElementById("payment-method").textContent = bookingDetails.payment_method || "N/A";
    document.getElementById("booking-id").textContent = bookingDetails.booking_id || "N/A";

    // Handle return to home button
    document.getElementById("return-home").addEventListener("click", function () {
        window.location.href = "../index.html";
    });

    // Clear booking details after displaying
    localStorage.removeItem("bookingDetails");
});
