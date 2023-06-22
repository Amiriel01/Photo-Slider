//slide images//
let slideImg = document.querySelectorAll("img");

//next and prev buttons//
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

//indicator dots//
let dots = document.querySelectorAll(".dot");

let counter = 0;

//next button function//
next.addEventListener("click", slideNext);
function slideNext() {
    slideImg[counter].style.animation = "next1 0.5s ease-in forwards"
    if (counter >= slideImg.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImg[counter].style.animation = "next2 0.5s ease-in forwards"
}

//prev button function//
prev.addEventListener("click", slidePrev);
function slidePrev() {
    slideImg[counter].style.animation = "prev1 0.5s ease-in forwards"
    if (counter === 0) {
        counter = slideImg.length-1;
    } else {
        counter--;
    }
    slideImg[counter].style.animation = "prev2 0.5s ease-in forwards"
}