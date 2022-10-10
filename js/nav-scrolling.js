var header = document.getElementById("header");

var scrollpos;
document.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    if (scrollpos > 355) {
        header.classList.add("navbar-dark");
        header.classList.add("shadow");
    } else {
        header.classList.remove("navbar-dark");
        header.classList.remove("shadow");
    }
});