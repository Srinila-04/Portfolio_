// Typing Effect (Continuous)
function continuousTypingEffect(element, text, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = ""; 
                index = 0; 
                type();
            }, 1000);
        }
    }
    type();
}

// Select the correct elements by using IDs or more specific classes
var nameElement = document.querySelector("#main-name"); 
var roleElement = document.querySelector("#main-role"); 

continuousTypingEffect(nameElement, "Srinila Sivakumar", 100);
continuousTypingEffect(roleElement, "Front-End Developer", 100);

// Modify glitterEffect to pulse with blue glow only
var blueRound = document.querySelector(".relative");

function glitterEffect() {
    blueRound.style.boxShadow = "0 0 10px #1e90ff, 0 0 30px #1e90ff, 0 0 40px #1e90ff";
    setTimeout(() => {
        blueRound.style.boxShadow = "0 0 5px #1e90ff, 0 0 15px #1e90ff, 0 0 20px #1e90ff";
    }, 500);
}

setInterval(glitterEffect, 1000);


// Mobile Menu
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0";
});

closenav.addEventListener("click", function () {
    sidenav.style.right = "-100%";
});

// Apply movement effect after page loads
window.addEventListener("load", function () {
    var textContent = document.getElementById("text-content");
    var profileImage = document.getElementById("profile-image");

    textContent.style.opacity = "1";
    textContent.style.transform = "translateX(0)";
    textContent.style.transition = "transform 1s ease-out, opacity 1s ease-out";

    profileImage.style.opacity = "1";
    profileImage.style.transform = "translateX(0)";
    profileImage.style.transition = "transform 1s ease-out, opacity 1s ease-out";
});

