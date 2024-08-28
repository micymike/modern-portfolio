document.addEventListener('DOMContentLoaded', () => {
    // Fetch projects
    fetch('/projects')
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById('project-list');
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer">View Project</a>
                `;
                projectList.appendChild(projectCard);
            });
            
            // Initialize animations after projects are loaded
            initializeAnimations();
        });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function initializeAnimations() {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Parallax effect for the header
    gsap.to('header', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}