// Form Validation and Feedback
document.addEventListener("DOMContentLoaded", () => {
    const supportForm = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const issueField = document.getElementById("issue");
    const messageField = document.getElementById("message");

    // Real-time validation for the form fields
    const validateField = (field, errorMessage) => {
        const feedback = field.nextElementSibling;
        if (!field.value.trim()) {
            feedback.textContent = errorMessage;
            feedback.style.color = "red";
            return false;
        } else {
            feedback.textContent = "";
            return true;
        }
    };

    nameField.addEventListener("blur", () => validateField(nameField, "Name is required."));
    emailField.addEventListener("blur", () => validateField(emailField, "Email is required."));
    issueField.addEventListener("change", () => validateField(issueField, "Please select an issue."));
    messageField.addEventListener("blur", () => validateField(messageField, "Message is required."));

    // Form submission event
    supportForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const isNameValid = validateField(nameField, "Name is required.");
        const isEmailValid = validateField(emailField, "Email is required.");
        const isIssueValid = validateField(issueField, "Please select an issue.");
        const isMessageValid = validateField(messageField, "Message is required.");

        if (isNameValid && isEmailValid && isIssueValid && isMessageValid) {
            alert("Thank you! Your support request has been submitted successfully.");
            supportForm.reset();
        } else {
            alert("Please fill out all required fields before submitting.");
        }
    });
});
