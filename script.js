document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const ghost = document.getElementById('ghost-gengar');
    const sound = document.getElementById('ghost-sound');

    profileCard.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Áudio aguardando interação..."));

        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);

        ghost.style.left = `${x}px`;
        ghost.style.top = `${y}px`;
        
        ghost.classList.remove('hidden');
        setTimeout(() => ghost.classList.add('visible'), 10);

        setTimeout(() => {
            ghost.classList.remove('visible');
            setTimeout(() => ghost.classList.add('hidden'), 300);
        }, 2000);
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});