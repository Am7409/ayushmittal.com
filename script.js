var type = new Typed(".auto-input", {
    strings: ["Ayush Mittal^1000", "Web Developer^1000", "Coder^1000"],
    typespeed: 10,
    backspeed: 10,
    loop: true
})

// Portfolio Image and text 
var image = ["assets/weather.jpg", 
             "assets/Whackinamole.png",
             "assets/dadjoke.jpg"];
var text = ["Weatherify.io is your go-to source for the latest weather information. Stay informed with real-time temperature, wind speed, visibility, and more for any location, no matter where you are in the world.",
             "Test your skills and reflexes with our whack-a-mole game that's sure to provide hours of entertainment. With the ability to track your progress and unlock new levels, you'll always have a new challenge to overcome.",
             "Bring a smile to your face with our dad joke Chrome extension that delivers a constant stream of random jokes. Whether you're in need of a good laugh or just want to brighten your day, we've got you covered"];
var linktext = ["weatherify.io", "whackamole.com", "Dadjoke.exe"];
var link = ["https://am7409.github.io/Weatherify/",
            "https://am7409.github.io/Whack-A-Mole/",
            "https://github.com/Am7409/Dad-Joke-Chrome-Extension"];
var head = ["weatherify","Whack A Mole","Dad Joke"];
var i = 0;
function calb() {
    if (i <= 0) {
        i =0;
    }
    else {
        i--;
    }
    return i;
}
function cala() {
    if (i >= image.length - 1) {
        i =image.length -1;
    }
    else {
        i++;
    }
    return i;
}
//Calculating the progess bar
function calwidth(){
    var size=image.length - 1;
    var ans= Math.round((i/size)*100);
    return ans + "%";
}
function before() {
    var a = calb();
    document.getElementById('portimage')
        .src = image[i];
    document.getElementById('porttext')
        .innerHTML = text[i];
    document.getElementById("indicator").style.width = calwidth();
    document.getElementById("porttexthead").innerHTML = head[i];
    document.getElementById("porttextlink").href = link[i];
    document.getElementById("porttextlink").innerHTML = linktext[i];
}

function afterr() {
    var a = cala();
    document.getElementById('portimage')
        .src = image[i];
    document.getElementById('porttext')
        .innerHTML = text[i];
    document.getElementById("indicator").style.width = calwidth();
    document.getElementById("porttexthead").innerHTML = head[i];
    document.getElementById("porttextlink").href = link[i];
    document.getElementById("porttextlink").innerHTML = linktext[i];
}

//This is for the skill horizontal bar
gsap.from(".bar span", {
    scrollTrigger: ".bar",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});


//Changeing the title on chaning the tab
let title = document.title;
window.addEventListener("blur",()=>{
    document.title ="Come Back na!!!";
});
window.addEventListener("focus",()=>{
    document.title = title;
});



//Fliping the card
document.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

});

//Submision of the form
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Sending.....";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbz3B78-ynR-K11n2Vt3mbvrpGQk8jF7FdpyJtQQWWpXcwyZn_qDI1tFXjMRLxG-89TAHw/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            alert("Thank you for your submission. We value your interest in our services and will review your information promptly. Expect to hear from us soon.....");
        });
        form.reset();
        return false;
})

// Preloader
const fadeout =()=>{
    const loader = document.querySelector('.center-body');
    loader.classList.add('fade');
}
window.addEventListener('load',fadeout);
