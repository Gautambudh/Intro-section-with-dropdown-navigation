const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

// It will add and remove the 'active' class from the Header,
const toggleNavbar = () => {
    nav_header.classList.toggle("active"); // if active class present, it'll remove it and if not it'll add
}

// Whenever the menu-nav-icon btn is clicked, it will call the toggleNavbar() funtion 
mobile_nav.addEventListener("click", () => toggleNavbar());