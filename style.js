document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jumping behavior
            
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Smooth scrolling to section
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        });
    });

    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert("Downloading CV...");
        });
    }
});
