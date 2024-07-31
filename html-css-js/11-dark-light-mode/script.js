const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");

const black = "#000";
const white = "#fff";
const leftShifted = "55%";
const leftNormal = "5%";

let toggler = true; // * true = light, false = dark

const lightHeading = "Light Mode ";
const darkHeading = "Dark Mode ";

circle.style.left = "5%";
container.addEventListener("click", () => {
    console.log(toggler);

    circle.style.left = toggler ? leftShifted : leftNormal;
    circle.style.background = toggler ? black : white;
    body.style.background = toggler ? black : white;
    body.style.color = toggler ? white : black;

    headingText.innerHTML = toggler ? darkHeading : lightHeading;

    toggler = !toggler;
});
