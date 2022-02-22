let hamburg = document.querySelector('.header-right > a');
let hamburgAct =document.querySelector('.hamburger-menu');
let closed = document.querySelector('.hamburger-menu > a');

hamburg.addEventListener('click', function() {
    hamburgAct.classList.add('active');
});
closed.addEventListener('click', function() {
    hamburgAct.classList.remove('active');
})