var endDate = new Date("Oct 09, 2021 12:00:00").getTime();
var timer = setInterval(function() {

    let now = new Date().getTime(); 
    let t = endDate - now; 
    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("timer-days").innerHTML = days + 
    "<span class='label'> Μέρες</span>";

    document.getElementById("timer-hours").innerHTML= ("0" + hours).slice(-2) +
    "<span class='label'> Ώρες</span>";

    }
}, 1000);