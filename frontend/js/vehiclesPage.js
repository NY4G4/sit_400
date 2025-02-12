// JavaScript for Vehicles Page

document.addEventListener('DOMContentLoaded', () => {
    const vehicleList = document.querySelector('.vehicle-list');

    // Sample data for vehicles (to be replaced with dynamic content)
    const vehicles = [
        { id: 1, name: 'Toyota Corolla', description: 'Compact and fuel-efficient.', price: '$50/day' },
        { id: 2, name: 'Ford Explorer', description: 'Spacious SUV for family trips.', price: '$75/day' },
        { id: 3, name: 'Tesla Model 3', description: 'Eco-friendly electric vehicle.', price: '$100/day' }
    ];

    // Render vehicles
    vehicles.forEach(vehicle => {
        const vehicleItem = document.createElement('div');
        vehicleItem.classList.add('vehicle-item');

        vehicleItem.innerHTML = `
            <h2>${vehicle.name}</h2>
            <p>${vehicle.description}</p>
            <p><strong>${vehicle.price}</strong></p>
            <a href="#" class="btn">Book Now</a>
        `;

        vehicleList.appendChild(vehicleItem);
    });
});
