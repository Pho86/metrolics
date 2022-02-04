/* Accordion JS */
function openInner(accordionOpening) {
  // If inner content is displayed, hide content, change menu button to "-", and change colours.
  if (document.getElementById("accordionContent" + accordionOpening).style.display == "inline-block") {
     document.getElementById("accordionContent" + accordionOpening).style.display = "none";
     document.getElementById("accordionTitle" + accordionOpening).style.backgroundColor = "#fff";
     document.getElementById("accordionTitle" + accordionOpening).style.color = "#626262";
     document.getElementById("accordionStatus" + accordionOpening).innerHTML = "+";
  }
  // If inner content is hidden, display content, change menu button to "+", and change colours.
  else {
     document.getElementById("accordionContent" + accordionOpening).style.display = "inline-block";
     document.getElementById("accordionTitle" + accordionOpening).style.backgroundColor = "#19b2de";
     document.getElementById("accordionTitle" + accordionOpening).style.color = "#fff";
     document.getElementById("accordionStatus" + accordionOpening).innerHTML = "-";
  }
}

// Highlight the button when hovered. Doesn't work currently. --> However, will likely switch to css for this w/ a :hover selector.
function highlight(accordionHover) {
  if (document.getElementById("accordionContent" + accordionHover).style.display == "inline-block") {
     document.getElementById("accordionTitle" + accordionHover).style.color = "#fffff";
  }
  else {
     document.getElementById("accordionTitle" + accordionHover).style.color = "#626262";
  }
}


// Tab change, only changes the selected tab by colour currently, as none of the other tab's contents were shown in the PSD file.
function tabOut(tabNo) {
      for (i = 1; i < 4; i++) {
          document.getElementById("tab" + i).style.backgroundColor = "#f8f8f8";
      }
      document.getElementById("tab" + tabNo).style.backgroundColor = "#fff";
}

// Switch Panels in the slide show. Doesn't work currently.
/* function slidePan(slideShow) {
  if (document.getElementById("slidepan" + slideShow).style.display == "block") {
     document.getElementById("slidepan" + slideShow).style.display = "#none";
  }else {
     
  }
}

*/

