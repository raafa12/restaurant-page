// Function to set up tab navigation
function setupTabNavigation() {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');

    // Add click event listener to each button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get the tab name
            const tabName = button.getAttribute('data-tab');

            // Here you would add logic to load different page contents
            // For now, we'll just log the tab name
            console.log(`Navigated to ${tabName} tab`);
        });
    });
}

// Call initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);