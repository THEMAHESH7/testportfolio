document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    const downloadBtn = document.querySelector(".download-btn");
    downloadBtn.addEventListener("click", function () {
        alert("Downloading CV...");
    });
});
