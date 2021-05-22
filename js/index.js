var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
var dark = document.querySelector('.dark-toggle');
var body = document.querySelector('body');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
})

dark.addEventListener('click', () => {
    dark.classList.toggle('dark');
    body.classList.toggle('dark');

})

