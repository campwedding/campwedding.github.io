// Check if user has logged in, if not redirect to login
if (!sessionStorage.getItem('accessLevel')) {
    window.location.href = 'login.html';
}

// Camper access control
function checkCamperAccess() {
    const accessLevel = sessionStorage.getItem('accessLevel');

    if (accessLevel === 'camper') {
        const camperElements = document.querySelectorAll('.camper-only');
        camperElements.forEach(el => {
            if (el.tagName === 'A') {
                el.style.display = 'inline';
            } else {
                el.style.display = 'block';
            }
        });
    }
}

checkCamperAccess();
