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
let modal = document.querySelector(".modal");
let sendMessageBtn = document.querySelector(".more-details");
let closeBtn = document.querySelector(".btn-close");

// console.log(modal)
// console.log(sendMessageBtn)
// console.log(closeBtn)

sendMessageBtn.addEventListener("click",openModal)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show"); 
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

//modal scroll
// console.log(window.pageYOffset)// сколько проскролили
// console.log(document.body.scrollHeight)// высота странички

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)// на событии scroll удалить ф. showModalByScroll.git 
    }
}

window.addEventListener("scroll",showModalByScroll);

    