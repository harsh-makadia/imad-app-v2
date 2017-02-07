console.log("loaded!");

var element = document.getElementById("text");
element.innerHTML = "new value";

var img = document.getElementById("img");
img.onclick = function() {
  img.style.width = '100px';  
};