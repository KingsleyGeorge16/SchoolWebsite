// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
// }


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}






var swiper = new Swiper('.review-slider',{
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});