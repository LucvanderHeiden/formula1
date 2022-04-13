var navButton = document.querySelector("nav button");
var navBar = document.querySelector("nav");
var scheduleList = document.querySelector("section:nth-of-type(2) ul");
var russia = document.querySelector("section:nth-of-type(2) li:nth-of-type(8)");

navButton.addEventListener("click", toggleMenu);
russia.addEventListener("click", focusRussia);

function toggleMenu() {
  navBar.classList.toggle("showMenu");
}

function focusRussia() {
    scheduleList.classList.add("russia");
}