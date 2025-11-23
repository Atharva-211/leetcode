document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('tilt-card');
    const hero = document.querySelector('.hero');

    // 3D Tilt Effect
    hero.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on mouse leave
    hero.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });

    hero.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Scroll Animations (Text Reveal)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text').forEach(el => textObserver.observe(el));

    // Sticky Card Highlighter
    const cardObserverOptions = {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: "0px"
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all siblings
                entry.target.parentElement.querySelectorAll('.feature-card-sticky').forEach(c => c.classList.remove('active'));
                // Add active to current
                entry.target.classList.add('active');
            }
        });
    }, cardObserverOptions);

    document.querySelectorAll('.feature-card-sticky').forEach(card => cardObserver.observe(card));

    // Particle System
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = 'rgba(0, 243, 255, 0.3)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            // Connect particles
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${1 - distance/100})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // Savings Calculator
    const spendRange = document.getElementById('spendRange');
    const spendValue = document.getElementById('spendValue');
    const savingsValue = document.getElementById('savingsValue');

    if (spendRange) {
        spendRange.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            spendValue.textContent = `₹${val.toLocaleString()}`;
            
            // Logic: 10% discount + 2% cashback = 12% savings
            const savings = Math.round(val * 12 * 0.12);
            savingsValue.textContent = `₹${savings.toLocaleString()}`;
        });
    }

    // Magnetic Buttons
    const magnets = document.querySelectorAll('.magnetic-btn');
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            magnet.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        magnet.addEventListener('mouseleave', () => {
            magnet.style.transform = 'translate(0, 0)';
        });
    });

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, 2000); // Wait for animation
        });
    }

    // Accordion
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');
            const panel = acc.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
