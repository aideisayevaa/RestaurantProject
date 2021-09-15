filterSelection('all')
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("gallery-photo");
    if(c == 'all') {
        for (let i = 0; i < x.length; i++) {
                x[i].style.display= 'block'
                x[i].style.animation = 'zoom-in .7s ease'
        }
        return
    }
    
    for (let i = 0; i < x.length; i++) {
        
        if(!x[i].classList.contains(c)){
            x[i].style.display = 'none'
        } else {
            x[i].style.display = 'block'
        }       
    }
    
}




var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonials-item");
    var dots = document.getElementsByClassName("testimonials-circle");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" testimonials-circle-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " testimonials-circle-active";
}
