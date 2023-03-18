var xPosOld = 0;
var yPosOld = 0;
let start, length, previousTimeStamp;
const size = getLength(window.innerWidth, window.innerHeight);


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
    document.getElementById('jellyfish').style.rotate = getDegree(0,-1,(xPosition - xPosOld +5)*window.innerWidth, (yPosition - yPosOld+5)*window.innerHeight)+'rad';
  }
  if(timestamp > start + time){
    xPosOld = xPosition;
    yPosOld = yPosition;
    xPosition = Math.random()*90;
    yPosition = Math.random()*90;
    start = timestamp;
    length = getLength(xPosition - xPosOld, yPosition - yPosOld);
    time =  length * size /10;
    document.getElementById('jellyfish').style.rotate = getDegree(0,-1,(xPosition - xPosOld +5)*window.innerWidth, (yPosition - yPosOld+5)*window.innerHeight)+'rad';
  }
  elapsed = timestamp - start;
  xPosNew = xPosOld + (xPosition - xPosOld)*(elapsed/time);
  yPosNew = yPosOld + (yPosition - yPosOld)*(elapsed/time);
  document.getElementById('jellyfish').style.top = yPosNew +5+'vh';
  document.getElementById('jellyfish').style.left = xPosNew +5+'%';
  window.requestAnimationFrame(jellyfish_step);
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

window.requestAnimationFrame(jellyfish_step);