const btns = document.getElementsByClassName('btn')
const btnsMid = document.getElementsByClassName('btn-mid')
const btnsSml = document.getElementsByClassName('btn-sml')


function animateBtn(btn){
    btn.addEventListener('click', function (e){
        console.log('clicked')
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left= x + 'px';
        ripples.style.top= y + 'px';
        this.appendChild(ripples);

        setTimeout(()=>{
            ripples.remove()
        }, 801)
    })
}

for (const btn of btns) {
    animateBtn(btn)
}
for (const midBtn of btnsMid) {
    animateBtn(midBtn)
}
for (const smlBtn of btnsSml) {
    animateBtn(smlBtn)
}