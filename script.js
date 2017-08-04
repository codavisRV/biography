var nav = document.getElementById("desktop-nav");
var hamburger = document.getElementById("hamburger-icon");
var exit = document.getElementById("close-icon");
hamburger.addEventListener("click", function() {
    nav.style.display = "block";
    exit.style.display = "block";
    hamburger.style.display = "none";
});

exit.addEventListener("click", resetNav)
nav.addEventListener("click", resetNav);

function resetNav () {
    nav.style.display = "none";
    exit.style.display = "block";
    hamburger.style.display = "block";
}
