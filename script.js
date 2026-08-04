<<<<<<< HEAD
// ===========================
// SMOOTH ACTIVE MENU
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===========================
// BUTTON HOVER EFFECT
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// ===========================
// CARD ANIMATION
// ===========================

const cards=document.querySelectorAll(
".skill-card,.project-card,.edu-box,.contact-card"
);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ===========================
// PAGE TITLE
// ===========================

document.title="Ayush Kumar | Portfolio";
// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Web Developer",
    "Python Learner",
    "AI Enthusiast",
    "Computer Science Student"
];

const typingElement = document.querySelector(".home-content h2");

if (typingElement) {

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = text[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex++);

            if (charIndex > currentText.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                textIndex = (textIndex + 1) % text.length;
            }

        }

        setTimeout(typeEffect, deleting ? 40 : 100);

    }

    typeEffect();

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(
"section,.project-card,.skill-card,.edu-box,.contact-card"
);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="1s";

});

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#49b6ff;
color:#000;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px #49b6ff;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// ACTIVE LINK COLOR
// ===============================

const links=document.querySelectorAll(".sidebar a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

=======
// ===========================
// SMOOTH ACTIVE MENU
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===========================
// BUTTON HOVER EFFECT
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// ===========================
// CARD ANIMATION
// ===========================

const cards=document.querySelectorAll(
".skill-card,.project-card,.edu-box,.contact-card"
);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ===========================
// PAGE TITLE
// ===========================

document.title="Ayush Kumar | Portfolio";
// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Web Developer",
    "Python Learner",
    "AI Enthusiast",
    "Computer Science Student"
];

const typingElement = document.querySelector(".home-content h2");

if (typingElement) {

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = text[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex++);

            if (charIndex > currentText.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                textIndex = (textIndex + 1) % text.length;
            }

        }

        setTimeout(typeEffect, deleting ? 40 : 100);

    }

    typeEffect();

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(
"section,.project-card,.skill-card,.edu-box,.contact-card"
);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="1s";

});

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#49b6ff;
color:#000;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px #49b6ff;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// ACTIVE LINK COLOR
// ===============================

const links=document.querySelectorAll(".sidebar a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

>>>>>>> dfe001251697aee8248f1a805b8bfd3e3de75a67
console.log("Welcome to Ayush Kumar Portfolio 🚀");