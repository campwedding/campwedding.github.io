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
        // Show all camper-only elements
        const camperElements = document.querySelectorAll('.camper-only');
        camperElements.forEach(el => {
            // Check if it's a nav link or a section/form element
            if (el.tagName === 'A') {
                el.style.display = 'inline';
            } else if (el.tagName === 'SECTION') {
                el.style.display = 'block';
            } else {
                el.style.display = 'block';
            }
        });
    }
}

// Run on page load
checkCamperAccess();
