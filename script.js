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
    if (counter >= slideImg.length-1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    indicators();
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
    indicators();
}

//auto slide function//
function autoSlide() {
    interval  = setInterval (timer, 5000);
    function timer() {
        slideNext();
        indicators();
    }
}

autoSlide();

//stop auto sliding on mouse over//
let container = document.querySelector(".container");
container.addEventListener("mouseover", function() {
    clearInterval(interval);
});

//resume slideing when mouseover is moved away//
container.addEventListener("mouseout", autoSlide);

//add and remove active class from the indicators//
function indicators() {
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
dots[counter].className += " active";
}

//add click event to dots//
function switchImage(currentImage) {
    currentImage.classList.add("active");
    let imageId = currentImage.getAttribute("attr");
    if (imageId > counter) {
        slideImg[counter].style.animation = "next1 0.5s ease-in forwards"
        counter = imageId;
        slideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    } else if (imageId === counter) {
        return;
    } else {
        slideImg[counter].style.animation = "prev1 0.5s ease-in forwards"
        counter = imageId;
        slideImg[counter].style.animation = "prev2 0.5s ease-in forwards"
    }
    indicators();
}