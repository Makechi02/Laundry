
let copyrightYear = document.getElementById("year");
copyrightYear.innerHTML = new Date().getFullYear();

let toTop = document.querySelector(".toTop");
toTop.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
     // And if we need scrollbar
 scrollbar: {
    el: '.swiper-scrollbar',
    },
}); 
