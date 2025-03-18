document.getElementById("registerVehicleForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData();
    formData.append("vehicle_model", document.getElementById("vehicle_model").value);
    formData.append("plate_number", document.getElementById("plate_number").value);
    formData.append("year", document.getElementById("year").value);
    formData.append("seats", document.getElementById("seats").value);
    formData.append("insurance", document.getElementById("insurance").value);
    formData.append("garage", document.getElementById("garage").value);
    formData.append("vehicle_photo", document.getElementById("vehicle_photo").files[0]);

    console.log("Vehicle Data:", Object.fromEntries(formData));

    // Simulate sending data to backend
    // Example: 
    // fetch('/api/registerVehicle', {
    //     method: 'POST',
    //     body: formData,
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     alert("Vehicle registered successfully!");
    //     window.location.href = "dashboard.html"; // Redirect to dashboard after success
    // })
    // .catch(error => console.error('Error:', error));
});
