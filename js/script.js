window.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .stat-card, .education-card, .contact-card"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
