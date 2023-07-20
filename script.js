let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.getElementById('displayTime')

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
}

function watchStart() {
    setInterval(stopwatch, 1000);
}