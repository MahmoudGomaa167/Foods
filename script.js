const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
let menu = document.querySelector('.menu');
let target = document.querySelectorAll('.target');

menu.addEventListener('click', () => {
    target.forEach(item => {
        item.classList.toggle('change');
    });
});

setInterval(() => {
    i++;
    let icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');

    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    }else{
        icon.nextElementSibling.classList.add('change');
    }

}, 4000)