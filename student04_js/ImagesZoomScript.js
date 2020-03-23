/*sample student04_images B&W to color and zoom*/

document.getElementById("culture").addEventListener("mouseover", function () {
    document.getElementById("cultureImage").style.filter = "grayscale(0%)";
    document.getElementById("cultureImage").className = "img zoom";
});

document.getElementById("culture").addEventListener("mouseleave", function () {
    document.getElementById("cultureImage").style.filter = "grayscale(100%)";
    document.getElementById("cultureImage").className = "img zoomOut";
});

document.getElementById("oldKingdom").addEventListener("mouseenter", function () {
    document.getElementById("oldKingdomImage").style.filter = "grayscale(0%)";
    document.getElementById("oldKingdomImage").className = "img zoom";
});

document.getElementById("oldKingdom").addEventListener("mouseleave", function () {
    document.getElementById("oldKingdomImage").style.filter = "grayscale(100%)";
    document.getElementById("oldKingdomImage").className = "img zoomOut";
});

document.getElementById("forests").addEventListener("mouseenter", function () {
    document.getElementById("forestsImage").style.filter = "grayscale(0%)";
    document.getElementById("forestsImage").className = "img zoom";
});
document.getElementById("forests").addEventListener("mouseleave", function () {
    document.getElementById("forestsImage").style.filter = "grayscale(100%)";
    document.getElementById("forestsImage").className = "img zoomOut";
});

document.getElementById("mountains").addEventListener("mouseenter", function () {
    document.getElementById("mountainsImage").style.filter = "grayscale(0%)";
    document.getElementById("mountainsImage").className = "img zoom";
});

document.getElementById("mountains").addEventListener("mouseleave", function () {
    document.getElementById("mountainsImage").style.filter = "grayscale(100%)";
    document.getElementById("mountainsImage").className = "img zoomOut";
});

document.getElementById("beaches").addEventListener("mouseenter", function () {
    document.getElementById("beachesImage").style.filter = "grayscale(0%)";
    document.getElementById("beachesImage").className = "img zoom";
});

document.getElementById("beaches").addEventListener("mouseleave", function () {
    document.getElementById("beachesImage").style.filter = "grayscale(100%)";
    document.getElementById("beachesImage").className = "img zoomOut";
});


