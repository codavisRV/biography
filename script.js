
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
nav.addEventListener("click", resetNav); //need to fix this. It also closes if you don't actually click a link

function resetNav () {
    nav.style.display = "none";
    exit.style.display = "none";
    hamburger.style.display = "block";
}

//Form Submit
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    
    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    return false; //not working?? 
    
});


// gallery box toggle
const galleryTab = document.getElementById("tab1");

console.log(galleryTab);