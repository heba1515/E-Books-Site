document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcon = document.querySelector('.book-details-page__wishlist');
    const wishlistText = wishlistIcon.querySelector('i');

    wishlistIcon.addEventListener('click', () => {
        if (wishlistText.classList.contains('fa-regular')) {
            wishlistText.classList.remove('fa-regular');
            wishlistText.classList.add('fa-solid');
            wishlistText.style.color = "red"; 

            wishlistIcon.querySelector('div').textContent = "Added to Wishlist";
        } else {
            wishlistText.classList.remove('fa-solid');
            wishlistText.classList.add('fa-regular');
            wishlistText.style.color = ""; 

            wishlistIcon.querySelector('div').textContent = "Add to Wishlist";
        }
    });
});
const hamburger = document.querySelector(".header__hamburger");
hamburger.onclick = function () {
    const navBar = document.querySelector(".header__nav");
    navBar.classList.toggle("active");
}