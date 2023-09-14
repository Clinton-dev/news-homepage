// get closeButton
const closeButton = document.getElementById('close-btn')
// get menuButton
const menuButton = document.getElementById('menu-btn')

// Get mobileNavWrapper
const mobileNavWrapper = document.getElementById('mobile-nav-items-wrapper')

// Add click event listener to menu and close button
menuButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'none';
})
// When closeButton is clicked
    // Toggle Visibility of mobileNavWrapper element
    // If mobileNavWrapper is visible
        // hide mobileNavWrapper
    // else
        // Show mobileNavWrapper