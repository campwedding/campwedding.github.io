// Check if user has logged in, if not redirect to login
if (!sessionStorage.getItem('accessLevel')) {
    window.location.href = 'login.html';
}

// Countdown Timer
const weddingDate = new Date('May 15, 2027 16:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

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
