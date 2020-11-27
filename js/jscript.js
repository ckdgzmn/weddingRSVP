// Set the date
var countdownDate = new Date("Dec 18, 2020 16:00:00").getTime();

// Update every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();

// Difference time now and countdown date  
var distance = countdownDate - now;

// Time calculations
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display with id="countdownTimer"
document.getElementById("countdownTimer").innerHTML = days + "   " + hours + "   " + minutes + "   " + seconds + "   ";

// If the countdown ends

if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownTimer").innerHTML = "We're married";
    }
}, 1000);

