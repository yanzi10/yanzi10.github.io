/* ===========================
TYPING EFFECT
=========================== */

const typingElement =
document.getElementById("typing-text");

const texts = [
"Software Developer",
"Android Developer",
"Computer Science Student",
"Java Programmer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

```
const currentText =
texts[textIndex];

if(!isDeleting){

    typingElement.textContent =
    currentText.substring(
        0,
        charIndex + 1
    );

    charIndex++;

    if(charIndex === currentText.length){

        isDeleting = true;

        setTimeout(
            typeEffect,
            1500
        );

        return;
    }

}else{

    typingElement.textContent =
    currentText.substring(
        0,
        charIndex - 1
    );

    charIndex--;

    if(charIndex === 0){

        isDeleting = false;

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;
        }
    }
}

setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
);
```

}

typeEffect();

/* ===========================
SCROLL REVEAL
=========================== */

const observer =
new IntersectionObserver(
(entries)=>{

```
entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add(
            "show"
        );
    }

});
```

},{
threshold:0.1
});

document.querySelectorAll(
".skill-card,.project-card,.stat-card,.timeline-item,.glass-card,.contact-card"
).forEach(el=>{

```
el.classList.add("hidden");

observer.observe(el);
```

});

/* ===========================
COUNTER ANIMATION
=========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

```
const target =
+counter.dataset.target;

let count = 0;

const updateCounter = ()=>{

    const increment =
    target / 50;

    if(count < target){

        count += increment;

        counter.innerText =
        Math.ceil(count);

        requestAnimationFrame(
            updateCounter
        );

    }else{

        counter.innerText =
        target;

        if(target === 36){

            counter.innerText =
            "3.6";
        }

        if(target === 4){

            counter.innerText =
            "4+";
        }

        if(target === 10){

            counter.innerText =
            "10+";
        }
    }
};

updateCounter();
```

});

/* ===========================
NAVBAR SCROLL EFFECT
=========================== */

window.addEventListener(
"scroll",
()=>{

```
const navbar =
document.querySelector(
    ".navbar"
);

if(window.scrollY > 50){

    navbar.style.background =
    "rgba(11,17,32,.85)";

    navbar.style.boxShadow =
    "0 4px 20px rgba(0,0,0,.3)";

}else{

    navbar.style.background =
    "transparent";

    navbar.style.boxShadow =
    "none";
}
```

});

/* ===========================
PARTICLES EFFECT
=========================== */

const particles =
document.getElementById(
"particles"
);

for(let i=0;i<40;i++){

```
const particle =
document.createElement("span");

particle.classList.add(
    "particle"
);

particle.style.left =
Math.random()*100 + "%";

particle.style.top =
Math.random()*100 + "%";

particle.style.animationDuration =
(5 + Math.random()*10) + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particles.appendChild(
    particle
);
```

}
