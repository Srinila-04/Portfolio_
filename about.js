// Mobile Menu
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0"; // Open sidenav
});

closenav.addEventListener("click", function () {
    sidenav.style.right = "-100%"; // Close sidenav
});