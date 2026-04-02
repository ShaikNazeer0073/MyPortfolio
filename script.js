// Cute & Bubbly Interactivity JS

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Sticky Navbar & Active Link Update ---
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");

        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) current = section.getAttribute("id");
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) link.classList.add("active");
        });
    });

    // --- Mobile Menu ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => navLinksContainer.classList.toggle("active"));
    navLinks.forEach(link => link.addEventListener("click", () => navLinksContainer.classList.remove("active")));

    // --- Intersection Observers (Soft Slide Ins) ---
    const sliders = document.querySelectorAll('.slide-up');

    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            if (entry.target.classList.contains('slide-up')) {
                entry.target.classList.add('appear');
            }
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    sliders.forEach(slider => appearOnScroll.observe(slider));

    // Side companions removed as per user request
});
