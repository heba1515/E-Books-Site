
hamburger = document.querySelector(".header__hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".header__nav");
    navBar.classList.toggle("active")
}