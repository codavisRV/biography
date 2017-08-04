var nav = document.getElementById("desktop-nav");
var hamburger = document.getElementById("hamburger-icon");
console.log(nav);
console.log(hamburger);
hamburger.addEventListener("click", function() {
    nav.style.display = "block";
    console.log('done');
});