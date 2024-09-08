var num = 1;
function button1() {
    num*=10;
    document.getElementById("output").innerHTML = "Pressed " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    console.log("Toggle button clicked!");
    var currelement = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currstyle = currelement.getAttribute("href");
    
    // 1 (c) Determine new stylesheet file name
    var newstyle;
    if (currstyle === "styles.css") {
        newstyle = "new-styles.css";
    }
    else {
        newstyle = "styles.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    currelement.setAttribute("href", newstyle);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newstyle)
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();

    // Get all navigation links
    var navLinks = document.querySelectorAll('nav ul li a');

    // Loop through the links to find the current page and add the 'active' class
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});



window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var savedstyle = localStorage.getItem("stylesheet");
    // 2 (b) get html style element by ID
    var elem = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    if (savedstyle) {
        elem.setAttribute("href", savedstyle);
    }
}