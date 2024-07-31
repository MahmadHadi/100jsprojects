const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let sec = 60;
let minutes = 24;

let flag = true;

function timerset() {
    // sec = 60;
    // minutes = 24;
    sec--;
    timer.innerHTML = `${minutes} : ${sec < 10 ? 0 : ""}${sec}`;

    if (sec == 0) {
        minutes--;
        sec = 60;
    }
    if (minutes == -1) {
        alert("Break Time !");
        minutes = 24;
    }

    // * to stop clock
    if (minutes == 0 && sec == 0) {
        clearInterval(intervalId);
    }

    return;
}

let intervalId;

start.addEventListener("click", () => {
    console.log(sec);
    intervalId = setInterval(timerset, 1000);
});

stop.addEventListener("click", () => {
    console.log(intervalId);
    clearInterval(intervalId);
});

reset.addEventListener("click", () => {
    minutes = 24;
    sec = 60;
    clearInterval(intervalId);
    timer.innerHTML = `25 : 00`;
});
