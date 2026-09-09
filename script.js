document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const ghost = document.getElementById('ghost-gengar');
    const sound = document.getElementById('ghost-sound');

    // Lógica do susto ao clicar no perfil
    if (profileCard) {
      profileCard.addEventListener('click', () => {
          if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Interação necessária para áudio."));
          }

          // Posicionamento aleatório do Gengar
          const x = Math.random() * (window.innerWidth - 150);
          const y = Math.random() * (window.innerHeight - 150);

          if (ghost) {
            ghost.style.left = `${x}px`;
            ghost.style.top = `${y}px`;
            ghost.classList.remove('hidden');
            setTimeout(() => ghost.classList.add('visible'), 10);

            // Remove o fantasma após 2 segundos
            setTimeout(() => {
                ghost.classList.remove('visible');
                setTimeout(() => ghost.classList.add('hidden'), 300);
            }, 2000);
          }
      });
    }

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
                return;
            }

            // Para links normais (ex.: /projetos.html), garantimos um fallback caso algo impeça a navegação
            if (href && !href.startsWith('#')) {
                // Pequeno timeout: se o navegador não navegar (por qualquer razão), forçamos a navegação
                setTimeout(() => {
                    try {
                        const targetUrl = new URL(href, location.href).href;
                        if (location.href !== targetUrl) {
                            location.href = targetUrl;
                        }
                    } catch (err) {
                        // fallback simples
                        if (location.pathname !== href) location.href = href;
                    }
                }, 50);
            }
        });
    });
});
