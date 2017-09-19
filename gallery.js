
// gallery box toggle
const galleryTab1 = document.getElementById("tab1");
const galleryTab2 = document.getElementById("tab2");

function switchTabs() {
    event.preventDefault();
    var el = event.target
    if (!el.classList.contains("active")) {
        el.className += " active";
    }
    if (el.id === "tab1") {
        document.getElementById("tab2").classList.remove("active");
        document.getElementById("photo-wrapper-1").style.display = "block";
        document.getElementById("photo-wrapper-2").style.display = "none";

    } else {
        document.getElementById("tab1").classList.remove("active");
        document.getElementById("photo-wrapper-2").style.display = "block";
        document.getElementById("photo-wrapper-1").style.display = "none";
    } 
    

    
    
    
}

galleryTab1.addEventListener("click", switchTabs);
galleryTab2.addEventListener("click", switchTabs);
