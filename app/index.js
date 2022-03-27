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
