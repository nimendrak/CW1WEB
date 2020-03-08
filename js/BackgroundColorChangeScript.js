/*background color changer*/

const input = document.querySelectorAll("input");
const bgColor = document.getElementById("bgColor");
let red;
let green;
let blue;

let i;
for (i = 0; i<input.length; i++) {
    input[i].addEventListener ("input", function () {
        red = document.getElementById("red").value;
        green = document.getElementById("green").value;
        blue = document.getElementById("blue").value;

        bgColor.style.background = "rgba("+ red + ","+ blue +","+ green +","+ 0.2 +")";
    })
}

/*background color reset*/
document.getElementById("colorValueReset").addEventListener("click", function () {
    document.getElementById("red").value = "0";
    document.getElementById("green").value = "0";
    document.getElementById("blue").value = "0";
    bgColor.style.background = "rgba("+ 255 + ","+ 255 +","+ 255 +","+ 0 +")";});
