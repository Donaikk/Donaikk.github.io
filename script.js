document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const ghost = document.getElementById('ghost-gengar');
    const sound = document.getElementById('ghost-sound');

    // Lógica do susto ao clicar no perfil
    profileCard.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Interação necessária para áudio."));

        // Posicionamento aleatório do Gengar
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);

        ghost.style.left = `${x}px`;
        ghost.style.top = `${y}px`;
        
        ghost.classList.remove('hidden');
        setTimeout(() => ghost.classList.add('visible'), 10);

        // Remove o fantasma após 2 segundos
        setTimeout(() => {
            ghost.classList.remove('visible');
            setTimeout(() => ghost.classList.add('hidden'), 300);
        }, 2000);
    });

    // Scroll Suave para navegação interna: apenas para links com hash (#...)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Só intercepta se for um link de âncora na mesma página (começa com '#')
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(href);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Caso contrário, deixa o comportamento padrão (navegar para outra página)
        });
    });
});
