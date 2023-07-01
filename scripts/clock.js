setInterval(() => {
    showTime();
}, 1);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let mil = time.getMilliseconds();

    let currentTime = hour + ":"+ min + ":" + sec + ":" + mil;
    document.getElementById("clock").innerHTML = currentTime;

    let am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    if (hour == 12) {
        am_pm = "PM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTimeInMeridiem = hour + ":" + min + ":" + sec + " " + am_pm;
    document.getElementById("clock2").innerHTML = currentTimeInMeridiem;
}

showTime();