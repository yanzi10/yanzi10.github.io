window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(
    ".card,.project-card"
    );

    cards.forEach(card => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0)";
        }
    });
});

document
.querySelectorAll(
".card,.project-card"
)
.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
    "translateY(40px)";
    item.style.transition =
    "all 0.6s ease";
});
