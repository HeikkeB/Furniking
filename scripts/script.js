window.onload = function () {
    setTimeout(function () {
        document.body.classList.add('loaded')

    }, 200)
}


// Set the date we're counting down to
var countDownDate = new Date("June 5, 2022 14:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("special-offer__timer").innerHTML = days + " days " + hours + " hrs "
        + minutes + " min " + seconds + " secs";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("special-offer__timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Set the date we're counting down to
var countDownDateTwo = new Date("May 29, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDateTwo - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("special-offer__timer_two").innerHTML = days + " days " + hours + " hrs "
        + minutes + " min " + seconds + " secs";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("special-offer__timer_two").innerHTML = "EXPIRED";
    }
}, 1000);