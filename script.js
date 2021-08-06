let bg = document.querySelector("#bg");
let moon = document.querySelector("#moon")
let mountain = document.querySelector("#mountain")
let road = document.querySelector("#road")
let text = document.querySelector("#Lorem")

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    bg.style.top = value *.5 + 'px';
    moon.style.left = -value *.5 + 'px';
    mountain.style.top = -value *.15 + 'px';
    road.style.top = value  *.15 + 'px';
    text.style.top =-value * 1  + 'px';

} )
    
