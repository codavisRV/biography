
//Nav Controls
const nav = document.getElementById("desktop-nav");
const hamburger = document.getElementById("hamburger-icon");
const exit = document.getElementById("close-icon");
hamburger.addEventListener("click", function() {
    nav.style.display = "block";
    exit.style.display = "block";
    hamburger.style.display = "none";
});

exit.addEventListener("click", resetNav)

function resetNav () {
    nav.style.display = "none";
    exit.style.display = "none";
    hamburger.style.display = "block";
}



