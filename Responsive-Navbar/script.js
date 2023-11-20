const menu = document.querySelector('.menu');
    menu.onclick = function() {
        const display = document.querySelector('.nav-bar-item');
        display.classList.toggle('active');
    }

    let changeicon = (icon) => {icon.classList.toggle('fa-times')}