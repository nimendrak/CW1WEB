/*background color changer*/
function changeBgColor(id) {
    document.body.style.background = document.getElementById(id).innerHTML;
}

document.getElementById("colorValueReset").addEventListener("click", function () {
    document.body.style.background = "#ffffff";
});

/*text color changer*/
const header1 = document.getElementById("header1");
const description1 = document.getElementById("description1");
const subDescription1 = document.getElementById("subDescription1");

const description2 = document.getElementById("description2");
const subDescription2 = document.getElementById("subDescription2");

const description3 = document.getElementById("description3");
const subDescription3 = document.getElementById("subDescription3");

const description4 = document.getElementById("description4");
const subDescription4 = document.getElementById("subDescription4");

const description5 = document.getElementById("description5");
const subDescription5 = document.getElementById("subDescription5");

function changeTxtColor(id) {
    header1.style.color = document.getElementById(id).innerHTML;

    description1.style.color = document.getElementById(id).innerHTML;
    subDescription1.style.color = document.getElementById(id).innerHTML;

    description2.style.color = document.getElementById(id).innerHTML;
    subDescription2.style.color = document.getElementById(id).innerHTML;

    description3.style.color = document.getElementById(id).innerHTML;
    subDescription3.style.color = document.getElementById(id).innerHTML;

    description4.style.color = document.getElementById(id).innerHTML;
    subDescription4.style.color = document.getElementById(id).innerHTML;

    description5.style.color = document.getElementById(id).innerHTML;
    subDescription5.style.color = document.getElementById(id).innerHTML;
}

document.getElementById("colorValueReset2").addEventListener("click", function () {
    header1.style.color = "";

    description1.style.color = "";
    subDescription1.style.color = "";

    description2.style.color = "";
    subDescription2.style.color = "";

    description3.style.color = "";
    subDescription3.style.color = "";

    description4.style.color = "";
    subDescription4.style.color = "";

    description5.style.color = "";
    subDescription5.style.color = "";
});