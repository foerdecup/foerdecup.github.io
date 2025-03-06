var xPosOld = 90;
var yPosOld = 0;
let start, length, previousTimeStamp;
const size = getLength(window.innerWidth, window.innerHeight);
let myReq; 
var lastRotate = 0;

function setup_boat() {
  xPosOld = 0;
  yPosOld = Math.random()*90;
  document.getElementById('boat').style.top = xPosOld +5+'vh';
  document.getElementById('boat').style.left = yPosOld +5+'%';
}

function boat_step(timestamp) {
  if(start === undefined){
    xPosition = 90;
    yPosition = Math.random()*90;
    start = timestamp;
    length = getLength(xPosition - xPosOld, yPosition - yPosOld);
    time =  (length * size)/10;
    //var newRotate = getDegree(0,-1,(xPosition - xPosOld)*window.innerWidth, (yPosition - yPosOld)*window.innerHeight);
    //document.getElementById('boat').style.rotate = newRotate + 'rad';
    //lastRotate = newRotate;
  }
  if(timestamp > start + time){
    xPosOld = xPosition;
    yPosOld = yPosition;
    xPosition = 90 - xPosOld;
    yPosition = Math.random()*90;
    start = timestamp;
    length = getLength(xPosition - xPosOld, yPosition - yPosOld);
    time =  length * size /10;
    if(xPosOld > xPosition){
      document.getElementById('boat').src = 'img/boat_1.png';
    }
    else {
      document.getElementById('boat').src = 'img/boat.png';
    }
    //var newRotate = getDegree(0,-1,(xPosition - xPosOld)*window.innerWidth, (yPosition - yPosOld)*window.innerHeight);
    //document.getElementById('boat').style.rotate = newRotate +'rad';
    //lastRotate = newRotate;
  }
  elapsed = timestamp - start;
  xPosNew = xPosOld + (xPosition - xPosOld)*(elapsed/time);
  yPosNew = yPosOld + (yPosition - yPosOld)*(elapsed/time);
  document.getElementById('boat').style.top = yPosNew +5+'vh';
  document.getElementById('boat').style.left = xPosNew +5+'%';
  myReq = window.requestAnimationFrame(boat_step);
}

function getDegree(xOld, yOld, xNew,yNew){
    const dot = xOld * xNew + yOld * yNew;
    const det = xOld * yNew + yOld * xNew;
    var angle = Math.atan2(det, dot);
    console.log(angle)
    return -angle;
}

function getLength(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

function cancelBoatAnimation() {
    cancelAnimationFrame(myReq);
    document.getElementById('boat').src = '';
}

window.requestAnimationFrame(boat_step);


function clickedcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/wand-32.png'),url('img/wand_clicked.png'), auto";
}
function unclickcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/un-wand-32.png'),url('img/wand_unclicked.png'), auto";
}