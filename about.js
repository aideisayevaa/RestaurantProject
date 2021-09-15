let imgAboutRight = document.querySelector(".about-photo-right img")
imagesAboutRight = [
    'img/about01.jpg',
    'img/about02 (1).jpg',
    'img/about03.jpg'
]

intervalCountAboutRight = 0;
let intervalAboutRight = setInterval(function () {
    if (intervalCountAboutRight == 3) {
        intervalCountAboutRight = 0
    } else {
        imgAboutRight.setAttribute('src', imagesAboutRight[intervalCountAboutRight])
        intervalCountAboutRight++
    }
}, 3000)




let imgAboutLeft = document.getElementById("slider-img")
imagesAboutLeft = [
    'img/about04.jpg',
    'img/about05.jpg',
    'img/about06.jpg'
]

intervalCountAboutLeft = 0;
let dot = document.getElementsByClassName('dot')
let dots = document.getElementById('dots')
console.log(dots)

dots.onclick = function(event) {
    if(!event.target.classList.contains('dot')) return
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active-dot')
        
    }


    if( event.target.classList.contains('dot')){
        event.target.classList.add('active-dot')
    } 
    
}
function changeImg(index) {
    if(index ==0){
        imgAboutLeft.setAttribute('src', imagesAboutLeft[0]) 
    } else if (index ==1) {
        imgAboutLeft.setAttribute('src', imagesAboutLeft[1]) 

    } else if(index ==2) {
        imgAboutLeft.setAttribute('src', imagesAboutLeft[2]) 

    }
}

