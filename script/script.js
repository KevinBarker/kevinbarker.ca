


console.log("Hello World");
var i = 0;
function test() {
  console.log("hello World from function");
}
var intervalID;
function startMouse(x){
  intervalID = setInterval(changeColor, 1);
}
function stopMouse(x){
  clearInterval(intervalID)
  x.style.filter = "hue-rotate(0deg)";
}

function changeColor(x){

  document.getElementById('logo').style.filter = "hue-rotate("+i+"deg)";

 i = i + 1;
}
