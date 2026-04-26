// ============================================================
// ETHEREAL_STUDIO INTERACTIVE_FLOW
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. HEADER SCROLL EFFECT
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. REVEAL ON SCROLL
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. SMOOTH ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. 3D TILT EFFECT (Profile Assembly)
    const profileAssembly = document.querySelector('.profile-assembly');
    if (profileAssembly) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;
            profileAssembly.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });

        // Reset on mouse leave
        window.addEventListener('mouseleave', () => {
            profileAssembly.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});

