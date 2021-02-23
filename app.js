// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");// создаем пер. для меню мобилки.
let mainMenu = document.querySelector(".menu");// создаем пер. для меню.

// console.log(mobileMenu);
// console.log(mainMenu);

 mobileMenu.addEventListener("click",function() {
     mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

//modal

    