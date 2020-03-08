var x = document.getElementById("myTopnav");
function myFunction() {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
