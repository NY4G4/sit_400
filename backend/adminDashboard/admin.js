document.addEventListener("DOMContentLoaded", () => {
    // Dummy data - Replace with backend API calls
    const dashboardStats = {
        users: 150,
        vehicles: 75,
        transactions: 300,
        revenue: "$25,000"
    };

    // Update dashboard cards
    document.getElementById("total-users").textContent = dashboardStats.users;
    document.getElementById("total-vehicles").textContent = dashboardStats.vehicles;
    document.getElementById("total-transactions").textContent = dashboardStats.transactions;
    document.getElementById("total-revenue").textContent = dashboardStats.revenue;

    // Dummy users table data
    const usersTable = document.getElementById("users-table");
    const usersData = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Hirer" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Vehicle Owner" }
    ];

    usersData.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
        `;
        usersTable.appendChild(row);
    });

    // Report Generation
    document.getElementById("generate-report").addEventListener("click", () => {
        alert("Report downloaded successfully!");
    });
});

// Dummy delete user function
function deleteUser(userId) {
    alert(`User ID ${userId} deleted.`);
}
