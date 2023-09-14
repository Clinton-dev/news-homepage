// get closeButton
const closeButton = document.getElementById('close-btn')
// get menuButton
const menuButton = document.getElementById('menu-btn')

// Get mobileNavWrapper
const mobileNavWrapper = document.getElementById('mobile-nav-items-wrapper')

// Add click event listener to menu and close button
// When closeButton is clicked show mobileNavWrapper
menuButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'block';
})

// When closeButton is clicked hide mobileNavWrapper
closeButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'none';
})
