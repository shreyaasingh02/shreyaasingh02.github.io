const modebtn = document.querySelector("#modebtn");

let currmode = "light";
let body = document.querySelector("body");
let navbar = document.querySelector("nav");
const sectionMode = document.querySelectorAll(".section");

modebtn.addEventListener("click", () => {
    if(currmode == "light") {
        currmode = "dark";
        body.classList.add("dark");
        modebtn.style.backgroundColor = "rgb(9, 9, 26)";
        modebtn.style.color = "white";
        body.style.backgroundColor = "rgba(19, 19, 77, 1)";
        navbar.style.backgroundColor = "rgba(51, 51, 138, 1)";
        sectionMode.forEach(sec => {
            sec.style.backgroundColor = "rgb(9, 9, 26)";
            sec.style.color = "white";
        })
        body.classList.remove("light");
    }
    else {
        currmode = "light";
        body.classList.add("light");
        modebtn.style.backgroundColor = "rgb(245, 236, 236)";
        modebtn.style.color = "gray";
        body.style.backgroundColor = "peachpuff";
        navbar.style.backgroundColor = "rgb(236, 203, 174)";
        sectionMode.forEach(sec => {
            sec.style.backgroundColor = "rgb(245, 236, 236)";
            sec.style.color = "black";
        })
        body.classList.remove("dark");
    }
})



const nav = document.querySelectorAll(".nav-item");

nav.forEach(item => {
    item.addEventListener("click", () => {
        nav.forEach(link => link.classList.remove("active"));
        item.classList.add("active");
    })
});

//animation of section
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".anime-ls, .anime-rs, .about-ls, .about-rs");
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains("active")) {
            requestAnimationFrame(() => {
                entry.target.classList.add("active");
            })
          }
        });
      },
      { threshold: 0.2 }
    );
    
    animatedElements.forEach(el => observer.observe(el));

})


const navitem = document.querySelectorAll('.nav-item');
navitem.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute("href").substring(1);
        const targetsection = document.getElementById(targetId);

        if(!targetsection) return;

        // 🔑 find animated elements INSIDE the section
        const animatedEls = targetsection.querySelectorAll('.anime-ls, .anime-rs, .about-ls, .about-rs');

        animatedEls.forEach(el => {
        // remove animation
        el.classList.remove('active');

        // force reflow
        void el.offsetWidth;

        // re-add animation
        setTimeout(() => {
            el.classList.add('active');
        }, 300);
        });

        targetsection.scrollIntoView({behavior: "smooth"});
       
        
    })
})

//animation of section
const reveal2 = document.querySelectorAll(".anime-rs");

const obs2 = new IntersectionObserver ( 
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !entry.target.classList.contains("active")) {
                entry.target.classList.add('active');
            }
        })
    },
    {threshold: 0.2}
);

reveal2.forEach(section => obs2.observe(section));

const navitem2 = document.querySelectorAll('.nav-item');
navitem2.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute("href").substring(1);
        const targetsection = document.getElementById(targetId);

        if(!targetsection) return;

        // 🔑 find animated elements INSIDE the section
        const animatedEls = targetsection.querySelectorAll('.anime-rs');

        animatedEls.forEach(el => {
        // remove animation
        el.classList.remove('active');

        // force reflow
        void el.offsetWidth;

        // re-add animation
        setTimeout(() => {
            el.classList.add('active');
        }, 300);
        });

        targetsection.scrollIntoView({behavior: "smooth"});
        
    })
})
