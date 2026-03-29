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

    // Title Screen Logic
    const enterBtn = document.getElementById('enter-btn');
    const titleScreen = document.getElementById('title-screen');
    const mainApp = document.getElementById('main-app');

    if (enterBtn && titleScreen && mainApp) {
        enterBtn.addEventListener('click', () => {
            titleScreen.classList.add('hidden');
            setTimeout(() => {
                titleScreen.style.display = 'none';
                mainApp.style.display = 'flex';
                // Trigger reflow for transition
                void mainApp.offsetWidth;
                mainApp.style.opacity = '1';
                mainApp.style.transition = 'opacity 1s ease';
            }, 800); // match CSS transition duration
        });
    }
});
