console.log("Cześć!")

let button = document.querySelector(".button");
let body = document.querySelector(".body")
let darkBackground = document.querySelector(".darkBackground")
let button__otherName = document.querySelector(".button__otherName")

button.addEventListener("click", () => {
body.classList.toggle("darkBackground");
button__otherName.innerText = body.classList.contains("darkBackground") ? "jasny" : "ciemny";
})