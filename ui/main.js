console.log("loaded!");

var element = document.getElementById("text");
element.innerHTML = "new value";

var img = document.getElementById("img");
var maginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft ;
}

img.onclick = function() {
  var interval = setInterval(moveRight, 100);
};