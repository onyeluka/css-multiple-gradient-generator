var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var body = document.getElementById("myCSS");
var h3 = document.querySelector("h3");

function changeColours() {
    body.style.background = "linear-gradient(to bottom" + "," + color1.value + "," + color2.value + "," + color3.value + "," + color4.value + "," + color5.value + ")";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";

    h3.textContent = body.style.background;
}
color1.addEventListener("input", changeColours);
color2.addEventListener("input", changeColours);
color3.addEventListener("input", changeColours);
color4.addEventListener("input", changeColours);
color5.addEventListener("input", changeColours);