// Set the date we're counting down to
var countDownDate = new Date("Sat, 21 June 2025 9:00:00 GMT").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  
  if (days<10)
    days = "0"+ days;
  document.getElementById("days").innerHTML = days;
  if (hours<10)
    hours = "0"+ hours;
  document.getElementById("hours").innerHTML = hours;
  if (minutes<10)
    minutes = "0"+ minutes;
  document.getElementById("minutes").innerHTML = minutes;
  if (seconds<10)
    seconds = "0"+ seconds;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("days").innerHTML = "??";
    document.getElementById("hours").innerHTML = "??";
    document.getElementById("minutes").innerHTML = "??";
    document.getElementById("seconds").innerHTML = "??";
  }
}, 1000);

function bubbleClick() {
  if (document.getElementById('bubbles').value != null && document.getElementById('bubbles').value == '') {
    document.getElementById('bubbles').value ='img/blubb.svg'; 
    setTimeout(function() {document.getElementById('bubbles').value=''; var sleepTimer = Math.random()*15000; setTimeout(newPosition, sleepTimer);},500);
  }
}

function newPosition() {
  var xPosition = Math.random()*90;
  var yPosition = Math.random()*90;
  document.getElementById('bubbles').style.top = yPosition +5+'vh';
  document.getElementById('bubbles').style.left = xPosition+5+'%';
  document.getElementById('bubbles').value ='img/bubbles.svg'; 
}

function setupBubbles() {
  var sleepTimer = Math.random()*10000; 
  setTimeout(newPosition, sleepTimer+5000);
}

function clickedcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/wand.png'),url('img/wand-32.png'),url('img/wand_clicked.png'), auto";
}
function unclickcurser() {
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "url('img/un-wand.png'),url('img/un-wand-32.png'),url('img/wand_unclicked.png'), auto";
}