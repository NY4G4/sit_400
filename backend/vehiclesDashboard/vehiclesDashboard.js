document.addEventListener("DOMContentLoaded", () => {
    const vehiclesList = document.getElementById("vehiclesList");

    // Sample vehicles data (replace this with API response later)
    const vehicles = [
        {
            id: 1,
            model: "Toyota Corolla",
            plate: "KDA 123A",
            year: 2018,
            seats: 5,
            insurance: "2025-10-12",
            garage: "Garage 1",
            photo: "../images/toyota_corolla.jpg"
        },
        {
            id: 2,
            model: "Mazda Demio",
            plate: "KDB 456B",
            year: 2020,
            seats: 5,
            insurance: "2025-08-20",
            garage: "Garage 2",
            photo: "../images/mazda_demio.jpg"
        }
    ];

    function renderVehicles() {
        vehiclesList.innerHTML = "";

        vehicles.forEach(vehicle => {
            const vehicleCard = document.createElement("div");
            vehicleCard.classList.add("vehicle-card");

            vehicleCard.innerHTML = `
                <div class="vehicle-details">
                    <img src="${vehicle.photo}" alt="${vehicle.model}">
                    <p><strong>Model:</strong> ${vehicle.model}</p>
                    <p><strong>Plate:</strong> ${vehicle.plate}</p>
                    <p><strong>Year:</strong> ${vehicle.year}</p>
                    <p><strong>Seats:</strong> ${vehicle.seats}</p>
                    <p><strong>Insurance Expires:</strong> ${vehicle.insurance}</p>
                    <p><strong>Garage:</strong> ${vehicle.garage}</p>
                </div>
                <div class="vehicle-actions">
                    <button class="edit-btn" onclick="editVehicle(${vehicle.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteVehicle(${vehicle.id})">Delete</button>
                </div>
            `;
            vehiclesList.appendChild(vehicleCard);
        });
    }

    renderVehicles();

    window.editVehicle = function (id) {
        alert(`Edit vehicle with ID: ${id}`);
        // Redirect to edit page or open a modal for editing
    };

    window.deleteVehicle = function (id) {
        if (confirm("Are you sure you want to remove this vehicle?")) {
            const index = vehicles.findIndex(v => v.id === id);
            if (index !== -1) {
                vehicles.splice(index, 1);
                renderVehicles();
            }
        }
    };
});
