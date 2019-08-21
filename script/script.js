


var speedChange = 12; // runs ever x miliseconds, lower is faster.
// 15 milliseconds is ~60fps
var changeRate = 2; // Hue rotations per speedChange, higher is faster
var i = 12; // what hue the image starts at
var intervalID;
function startMouse(x){
  console.log("Start");
  intervalID = setInterval(changeColor, speedChange);
}
function stopMouse(x){
  console.log("stop");
  i = 0;
  x.style.filter = "hue-rotate(0deg)";
  clearInterval(intervalID);


}

function changeColor(){
  console.log(i);
  document.getElementById('logo').style.filter = "hue-rotate("+i+"deg)";
  //document.getElementById('logo').style.filter = "";
  //x.style.filter = "hue-rotate(200deg)";
  i = i + changeRate;
}
// testing the commit in ATOM.
