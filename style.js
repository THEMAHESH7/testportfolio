// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect
const typingElement = document.querySelector('.typing');
const words = ["Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    let currentWord = words[wordIndex];
    let displayedText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

    typingElement.textContent = displayedText;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", type);
