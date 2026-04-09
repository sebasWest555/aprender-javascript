let themegreen = document.querySelector(".theme__green");
let themered = document.querySelector(".theme__red");
let themeblue = document.querySelector(".theme__blue");

let page = document.querySelector("html")

themegreen.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__green--active");
});

themered.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__red--active");
});

themeblue.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__blue--active");
});
