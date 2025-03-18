document.addEventListener("DOMContentLoaded", () => {
    const vehicleList = document.getElementById("vehicle-list");
    const filterModel = document.getElementById("filter-model");
    const filterPrice = document.getElementById("filter-price");

    // Fetch available vehicles from the API
    function loadVehicles() {
        fetch("/api/vehicles") // Backend should return JSON list of available vehicles
            .then(response => response.json())
            .then(data => {
                displayVehicles(data);
            })
            .catch(error => console.error("Error fetching vehicles:", error));
    }

    // Display vehicles in the UI
    function displayVehicles(vehicles) {
        vehicleList.innerHTML = ""; // Clear the list

        vehicles.forEach(vehicle => {
            const vehicleCard = document.createElement("div");
            vehicleCard.classList.add("vehicle-card");

            vehicleCard.innerHTML = `
                <img src="${vehicle.image}" alt="${vehicle.model}">
                <h3>${vehicle.model} (${vehicle.year})</h3>
                <p>Price: $${vehicle.price}/day</p>
                <button onclick="bookVehicle('${vehicle.id}')">Hire Now</button>
            `;

            vehicleList.appendChild(vehicleCard);
        });
    }

    // Function to book a vehicle
    window.bookVehicle = function (vehicleId) {
        const userConfirmation = confirm("Do you want to proceed with this booking?");
        
        if (userConfirmation) {
            fetch(`/api/book/${vehicleId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Vehicle booked successfully! Proceeding to checkout...");
                    window.location.href = "checkout.html";
                } else {
                    alert("Booking failed. Please try again.");
                }
            })
            .catch(error => console.error("Error booking vehicle:", error));
        }
    };

    // Apply filters
    filterModel.addEventListener("change", () => applyFilters());
    filterPrice.addEventListener("change", () => applyFilters());

    function applyFilters() {
        const selectedModel = filterModel.value;
        const selectedPrice = filterPrice.value;

        fetch("/api/vehicles")
            .then(response => response.json())
            .then(vehicles => {
                let filteredVehicles = vehicles;

                if (selectedModel !== "all") {
                    filteredVehicles = filteredVehicles.filter(vehicle => vehicle.model === selectedModel);
                }

                if (selectedPrice !== "all") {
                    filteredVehicles = filteredVehicles.filter(vehicle => {
                        if (selectedPrice === "low") return vehicle.price <= 50;
                        if (selectedPrice === "medium") return vehicle.price > 50 && vehicle.price <= 100;
                        if (selectedPrice === "high") return vehicle.price > 100;
                    });
                }

                displayVehicles(filteredVehicles);
            })
            .catch(error => console.error("Error applying filters:", error));
    }

    // Load vehicles when page loads
    loadVehicles();
});
