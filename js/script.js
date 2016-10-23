start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click);
stp.addEventListener("click", stp_click);

var count = 0,
    timerId, go = false

function start_click() {
    console.log("start");
    for_text.innerHTML = "";
    if (go == false) {
        timerId = setInterval(function() {
            count++;
            var msek = count % 1000;

            if (msek < 10) {
                msek = "0" + msek;
            }
            if ((msek >= 10) && (msek < 100)) {
                msek = "" + msek;
            }

            var sek = Math.floor(count / 1000) % 60;
            if (sek < 10) {
                sek = "0" + sek;
            }

            var min = Math.floor(count / 60000) % 60;
            if (min < 10) {
                min = "0" + min;
            }

            var hours = Math.floor(count / 360000) % 24;
            if (hours < 10) {
                hours = "0" + hours;
            }

            var str = hours + ":" + min + ":" + sek + ":" + msek;
            for_count.innerHTML = str;
        }, 1);
        go = true;
    }
}

function pause_click() {
    clearInterval(timerId);
    go = false;
    for_text.innerHTML = "";
    console.log("pause");
}

function stp_click() {
    console.log("stop");
    clearInterval(timerId);
    go = false;
    count = 0;
    for_count.innerHTML = count;
    for_text.innerHTML = "";
}
