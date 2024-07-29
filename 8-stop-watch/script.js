const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const miliSeconds = document.querySelector(".miliSeconds");

let startFlag = false;
let stopFlag = false;

let ms = 1;
let s = 0;
let m = 0;
let h = 0;

let intervalId;
start.addEventListener("click", () => {
    intervalId = setInterval(() => {
        // console.log("asdf ");
        miliSeconds.innerHTML = `${ms <= 9 ? 0 : ""}${ms}`;
        ms++;

        if (ms >= 10) {
            ms = 1;
            s++;
        }
        if (s >= 59) {
            s = 1;
            m++;
        }
        if (m >= 59) {
            m = 1;
            h++;
        }
        seconds.innerHTML = `${s <= 9 ? 0 : ""}${s}`;
        minutes.innerHTML = `${m <= 9 ? 0 : ""}${m}`;
        hours.innerHTML = `${h <= 9 ? 0 : ""}${h}`;
    }, 100);
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
});
reset.addEventListener("click", () => {
    clearInterval(intervalId);

    miliSeconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    h = 0;
    m = 0;
    s = 0;
    ms = 1;
});
