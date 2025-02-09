document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dark mode
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Load projects dynamically
    const projects = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' }
    ];

    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Responsive navigation menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
