var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openCity(cityName) {
   var i;
   var x = document.getElementsByClassName("city");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   document.getElementById(cityName).style.display = "block"; }