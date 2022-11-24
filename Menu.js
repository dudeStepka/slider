let clickNumber = 0;

function showMenu() {
    clickNumber++;
    if (clickNumber % 2 != 0)
        document.querySelector("nav").style.display = "block";
    else if (clickNumber % 2 == 0) document.querySelector("nav").style.display = 'none';

    console.log(clickNumber);
}

document.body.children[0].children[0].onclick = function() {
    location.href = "index.html";
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}