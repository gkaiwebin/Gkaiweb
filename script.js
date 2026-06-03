/**
 * GKAIWEB - Fixed Script
 */

document.addEventListener("DOMContentLoaded", () => {

    // DARK / LIGHT MODE
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector("i");

        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }
        });
    }

    // MOBILE MENU
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (mobileMenu) {

        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("is-active");
        });

        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
                mobileMenu.classList.remove("is-active");
            });
        });

    }

});
    // CONTACT FORM
const contactForm = document.querySelector(".interactive-form");

if(contactForm){

    contactForm.addEventListener("submit", ()=>{

        setTimeout(()=>{

            alert("Message sent successfully!");

        },1000);

    });

}
