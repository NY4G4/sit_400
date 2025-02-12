// JavaScript for Feedback Page
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Simulate form processing
        successMessage.textContent = 'Thank you for your feedback! We appreciate it.';
        successMessage.style.display = 'block';

        // Clear form fields
        feedbackForm.reset();
    });
});
