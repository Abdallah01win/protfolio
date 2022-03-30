const btns = document.getElementsByClassName('btn')
const btnsMid = document.getElementsByClassName('btn-mid')
const btnsSml = document.getElementsByClassName('btn-sml')
// buttons animation on click
function animateBtn(btns) {
    for (const btn of btns) {
        btn.addEventListener('click', function (e) {
            let x = e.pageX - e.target.offsetLeft;
            let y = e.pageY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
            setTimeout(() => {
                ripples.remove()
            }, 801)
        })
    }
}
animateBtn(btns);
animateBtn(btnsMid);
animateBtn(btnsSml);

// Show navigation on scroll up
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
})


// ----- GSAP Animations ------- //

// animate elements up on scroll 
gsap.registerPlugin(ScrollTrigger);
function gsapAnimateUp(selector) {
    let elements = gsap.utils.toArray(selector);
    elements.forEach(element => {
        gsap.to(element, {
            scrollTrigger: element,
            opacity: 1, y: 0, duration: 1, 
        },"bottom center")       
    });
}
gsapAnimateUp('.preTitle');
gsapAnimateUp('.title');
gsapAnimateUp('.skills-title');
gsapAnimateUp('.projects__project');
gsapAnimateUp('.about-me__info--text');
gsapAnimateUp('.about-me__svg');
gsapAnimateUp('.contact');

// animate elements up and reveal on scroll
gsap.to('.skill',{
    scrollTrigger: ".skill",
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, stagger: .5
})
    
// Animate and reveal elements on page load
let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
tl.to('.nav-element',{
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, stagger: .2, duration:1.4
})
function gsapRevealUp(target, duration, seq=""){
    tl.to(target, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: duration }, seq)
}
gsapRevealUp('.hero__text', 2.4, "-=1.2");
gsapRevealUp('.hero__img', 2.2, "-=2");
gsapRevealUp('.external-links', 3, "-=1.4");
// don't animate untill the element is in the view port fully
