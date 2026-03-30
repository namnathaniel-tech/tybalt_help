document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const updateTime = () => {
            dateEl.innerText = `LOG DATE: 14th Century | TIME: ${new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} VERONA STANDARD`;
        };
        updateTime();
        setInterval(updateTime, 1000);
    }
});