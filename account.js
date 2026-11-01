document.addEventListener('DOMContentLoaded', () => {
const userPfp = document.getElementById('userPfp');
const pfpLink = document.getElementById('userPfpLink');
const logoutBtn = document.getElementById('logoutButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownEmail = document.getElementById('dropdownEmail');
    const dropdownName = document.getElementById('dropdownName');
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const emailStored = localStorage.getItem('userEmail');

    if (isLoggedIn && emailStored) {
        if (dropdownEmail) dropdownEmail.textContent = emailStored;

        if (dropdownName) {
        // here we clean up the name in the used email to use as the users name for the account
        const rawName = emailStored.split('@')[0];
        const formattedName = rawName
            .split('.')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        dropdownName.textContent = formattedName;
        }
    }
    // Here we handle how the pfp clicking actions work, if the user is logged in it gives them the dropdown menu, else it redirects to the logout page
    if (pfpLink) {
        pfpLink.addEventListener('click', (event) => {
            if (isLoggedIn) {
                // if logged in we prevent moving on and drop the hidden menu
                event.preventDefault();
                event.stopPropagation();
                if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
                }
            } else {} // it redirects to the login page uninterrupted
        });
    }
    //if the user clicks anywhere outside of the dropdown menu, the menu closes itself
    window.addEventListener('click', (event) => {
        if (dropdownMenu && dropdownMenu.classList.contains('show')) {
        if (!dropdownMenu.contains(event.target) && event.target !== pfpLink && event.target !== userPfp) {
            dropdownMenu.classList.remove('show');
        }
        }
    });
    // here we capture the inputted email so it can be used in the display and so the pages remember the user
    if (loginForm && emailInput) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailValue = emailInput.value;
            if (emailValue !== '') {
                // the actual saving part
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', emailValue);
                const targetUrl = loginForm.action || 'index.html';
                window.location.href = 'index.html';
            }
        });
    }

    // loggin out is handled here
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
        });
    }
});