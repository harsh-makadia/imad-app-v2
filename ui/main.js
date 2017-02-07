console.log("loaded!");

var element = document.getElementById("text");
element.innerHTML = "new value";

var img = document.getElementById("img");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
  var interval = setInterval(moveRight, 50);
};