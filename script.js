document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const ghost = document.getElementById('ghost-gengar');
    const sound = document.getElementById('ghost-sound');

    profileCard.addEventListener('click', () => {
        // Tocar o grito do Gengar
        sound.currentTime = 0;
        sound.play();

        // Posicionar aleatoriamente
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);

        ghost.style.left = `${x}px`;
        ghost.style.top = `${y}px`;
        
        // Mostrar o fantasma
        ghost.classList.remove('hidden');
        setTimeout(() => ghost.classList.add('visible'), 10);

        // Sumir depois de 2 segundos
        setTimeout(() => {
            ghost.classList.remove('visible');
            setTimeout(() => ghost.classList.add('hidden'), 300);
        }, 2000);
    });
});