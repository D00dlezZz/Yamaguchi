const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

const quickTablePart = document.getElementsByClassName('table__top')[0];

upBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${20 * scaleCoef}px)`;
});

downBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${70 * scaleCoef}px)`;
});