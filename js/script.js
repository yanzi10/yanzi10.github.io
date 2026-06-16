const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(
".skill-card,.project-card,.stat-card,.education-card,.contact-card"
).forEach((el)=>{
el.classList.add("hidden");
observer.observe(el);
});

function animateValue(element,start,end,duration){

```
let startTimestamp = null;

const step = (timestamp)=>{

    if(!startTimestamp)
        startTimestamp = timestamp;

    const progress = Math.min(
        (timestamp-startTimestamp)/duration,
        1
    );

    element.textContent =
    Math.floor(
        progress*(end-start)+start
    );

    if(progress < 1){
        window.requestAnimationFrame(step);
    }
};

window.requestAnimationFrame(step);
```

}

window.addEventListener("load",()=>{

```
const stats =
document.querySelectorAll(".stat-card h3");

if(stats.length >= 3){

    stats[0].textContent = "0";
    stats[1].textContent = "0";
    stats[2].textContent = "0";

    animateValue(stats[0],0,36,1500);
    animateValue(stats[1],0,4,1500);
    animateValue(stats[2],0,10,1500);

    setTimeout(()=>{
        stats[0].textContent="3.6";
        stats[1].textContent="4+";
        stats[2].textContent="10+";
    },1600);
}
```

});
