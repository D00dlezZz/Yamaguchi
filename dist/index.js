const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const windowScroll = document;
const animatedBox = document.getElementsByClassName('bot')[0];
const animatedGirl = document.getElementsByClassName('bot__assistant')[0];
const animatedHole = document.getElementsByClassName('bot__hole')[0];
const quickTablePart = document.getElementsByClassName('table__top')[0];

upBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${20 * scaleCoef}px)`;
});

downBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${70 * scaleCoef}px)`;
});

windowScroll.addEventListener('scroll', ()=>{
    let dist = document.getElementById('start-appearance').getBoundingClientRect().y;

    if(dist >= -50 && dist <= 650) {
        animatedBox.style.opacity = '1'
        animatedGirl.classList.add('animate_appearance');
        animatedHole.classList.add('animate_pulsing')

        setTimeout(() => {
            animatedGirl.classList.add('animate_levitate');
        }, 3000)
    }
});