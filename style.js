document.addEventListener("DOMContentLoaded", () => {
    // Typing effect
    const text = "Web Developer | AI Enthusiast | Tech Explorer";
    let index = 0;
    function type() {
        document.querySelector(".typing").textContent = text.substring(0, index++);
        if (index <= text.length) {
            setTimeout(type, 100);
        }
    }
    type();

    // Smooth Scroll
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
        });
    });

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message Sent!");
    });
});
