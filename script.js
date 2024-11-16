function Hamburg() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(0px)"; // Slide down
}

function Cancel() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(-400px)"; // Slide up
}

document.querySelector(".hamburg").addEventListener("click", Hamburg);
document.querySelector(".Cancel").addEventListener("click", Cancel);