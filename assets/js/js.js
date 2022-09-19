var upClass = "toggle-up";
var downClass = "toggle-down";

function toggle(e) {
  var square = document.querySelectorAll(".square");
  for(i=0;i<square.length;i++){

    
    if(i===e){
      square[i].classList.toggle("toggle-up")
     
      }
    }
 
}
