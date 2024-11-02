/*
 Student Name: Mahogany Holder
    File Name: JavaScript
    Date: 4/14/2024
*/


//hamburger function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}