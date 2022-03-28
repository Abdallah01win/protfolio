const btns = document.getElementsByClassName('btn')
const btnsMid = document.getElementsByClassName('btn-mid')
const btnsSml = document.getElementsByClassName('btn-sml')


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

const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0){
        body.classList.remove("scroll-up");
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
})