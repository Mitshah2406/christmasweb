let navlist = document.querySelector('.navlist');
let hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-times');
    navlist.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        hamburger.classList.remove('fa-times');
        navlist.classList.remove('active')
    }
})


// -- home page

let prevBtn = document.getElementById('prev-slide');
let nextBtn = document.getElementById('next-slide');
let slides = document.querySelectorAll('.slide');
let contents = document.querySelectorAll('.content');
let i = 0;
nextBtn.addEventListener('click', () => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
})
prevBtn.addEventListener('click', () => {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
})