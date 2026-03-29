document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            navButtons.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target panel
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Dynamic Date
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        // Romeo and Juliet roughly set in 1300s/1500s. The text used 1357 as DOB.
        // Let's set a dramatic "Log Date"
        dateEl.innerText = `LOG DATE: 1378-08-14 | TIME: ${new Date().toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute:'2-digit'})} VERONA STANDARD`;
    }

    // Portal loads immediately
});
