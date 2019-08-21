


var speedChange = 12; // runs ever x miliseconds, lower is faster.
// 15 milliseconds is ~60fps
var changeRate = 10.2; // Hue rotations per speedChange, higher is faster
var i = 0; // what hue the image starts at
var intervalID;
function startMouse(x){
  intervalID = setInterval(changeColor(x), speedChange);
}
function stopMouse(x){
  i = 0;
  x.style.filter = "hue-rotate(0deg)";
  clearInterval(intervalID);


}

function changeColor(x){
  console.log(x);
  x.style.filter = "hue-rotate("+i+"deg)";
  //x.style.filter = "hue-rotate(200deg)";
  i = i + changeRate;
}
// testing the commit in ATOM.
