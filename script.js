const bars = document.getElementById('bars'),
    x = document.getElementById('close'),
    nav = document.getElementById('nav'),
    home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact'),
    main = document.querySelector('main');


bars.onclick = () => {

    main.style.transform = 'rotateZ(-20deg)';
    nav.style.transform = 'rotateZ(-33deg)';
    home.style.left = '25px';
    about.style.left = '35px';
    contact.style.left = '45px';
    document.querySelectorAll('.icon')[0].style.transitionDelay = '0.5s';
    document.querySelectorAll('.icon')[1].style.transitionDelay = '0.5s';
    document.querySelectorAll('.icon')[2].style.transitionDelay = '0.5s';
}
x.onclick = () => {

    main.style.transform = 'rotateZ(0deg)';
    nav.style.transform = 'rotateZ(0deg)';
    home.style.left = '-70px';
    about.style.left = '-80px';
    contact.style.left = '-90px';
    document.querySelectorAll('.icon')[0].style.transitionDelay = '0s';
    document.querySelectorAll('.icon')[1].style.transitionDelay = '0s';
    document.querySelectorAll('.icon')[2].style.transitionDelay = '0s';
}