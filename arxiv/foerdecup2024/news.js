var xPosOld = 0;
var yPosOld = 0;
let start, length, previousTimeStamp;
const size = getLength(window.innerWidth, window.innerHeight);
let myReq; 
var lastRotate = 0;

function setup_jellyfish() {
  xPosOld = Math.random()*90;
  yPosOld = Math.random()*90;
  document.getElementById('jellyfish').style.top = xPosOld +5+'vh';
  document.getElementById('jellyfish').style.left = yPosOld +5+'%';
}

function jellyfish_step(timestamp) {
  if(start === undefined){
    xPosition = Math.random()*90;
    yPosition = Math.random()*90;
    start = timestamp;
    length = getLength(xPosition - xPosOld, yPosition - yPosOld);
    time =  (length * size)/10;
    var newRotate = getDegree(0,-1,(xPosition - xPosOld)*window.innerWidth, (yPosition - yPosOld)*window.innerHeight);
    document.getElementById('jellyfish').style.rotate = newRotate + 'rad';
    lastRotate = newRotate;
  }
  if(timestamp > start + time){
    xPosOld = xPosition;
    yPosOld = yPosition;
    xPosition = Math.random()*90;
    yPosition = Math.random()*90;
    start = timestamp;
    length = getLength(xPosition - xPosOld, yPosition - yPosOld);
    time =  length * size /10;
    var newRotate = getDegree(0,-1,(xPosition - xPosOld)*window.innerWidth, (yPosition - yPosOld)*window.innerHeight);
    document.getElementById('jellyfish').style.rotate = newRotate +'rad';
    lastRotate = newRotate;
  }
  if(timestamp % 1000 > 500) {
    document.getElementById('jellyfish').src = 'img/jellyfish.svg';
  }
  if(timestamp % 1000 < 500) {
    document.getElementById('jellyfish').src = 'img/jellyfish_1.svg';
  }
  elapsed = timestamp - start;
  xPosNew = xPosOld + (xPosition - xPosOld)*(elapsed/time);
  yPosNew = yPosOld + (yPosition - yPosOld)*(elapsed/time);
  document.getElementById('jellyfish').style.top = yPosNew +5+'vh';
  document.getElementById('jellyfish').style.left = xPosNew +5+'%';
  myReq = window.requestAnimationFrame(jellyfish_step);
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

function cancelJellyAnimation() {
    cancelAnimationFrame(myReq);
    document.getElementById('jellyfish').src = '';
}

window.requestAnimationFrame(jellyfish_step);


function clickedcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/wand-32.png'),url('img/wand_clicked.png'), auto";
}
function unclickcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/un-wand-32.png'),url('img/wand_unclicked.png'), auto";
}