document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcons = document.querySelectorAll('.book-favorite');

    wishlistIcons.forEach((wishlistIcon) => {
        const wishlistText = wishlistIcon.querySelector('i');

        wishlistIcon.addEventListener('click', () => {
            if (wishlistText.classList.contains('fa-regular')) {
                wishlistText.classList.remove('fa-regular');
                wishlistText.classList.add('fa-solid');
                wishlistText.style.color = "red"; 
            } else {
                wishlistText.classList.remove('fa-solid');
                wishlistText.classList.add('fa-regular');
                wishlistText.style.color = ""; 
            }
        });
    });
});

// const hamburger = document.querySelector(".header__hamburger");
// hamburger.onclick = function () {
//     const navBar = document.querySelector(".header__nav");
//     navBar.classList.toggle("active");
// }

//* Search button
const searchButton = document.getElementById('search-button');
const searchContent = document.getElementById('search-content');
const searchClose = document.getElementById('search-close');

if(searchButton){
    searchButton.addEventListener('click', ()=>{
        searchContent.classList.add('show-search');
    })
}

if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search');
    })
}

//* login button
document.getElementById('login-button').addEventListener('click', ()=>{
    document.location = './htmlPages/login.html';
})


//* featured swipper
let swiperFeatured = new Swiper('.featured__swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
            slidesPerView: 6,
            centeredSlides: false,
        }
    }
})