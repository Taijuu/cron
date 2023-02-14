const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
//                Buttons                   //
const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")

let cron
let countHour = 0
let countMin = 0
let countSec = 0
let countMilli = 0

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

start.addEventListener("click", () => {
    clearInterval(cron);

    cron = setInterval(() => { timer(); }, 10);

    function timer() {
        if ((countMilli += 10) == 1000) {
            countMilli = 0;
            countSec++;
        }

        if (countSec == 60) {
            countSec = 0;
            countMin++;
        }

        if (countMin == 60) {
            countMin = 0;
            countHour++;
        }

        sec.innerHTML = returnData(countSec);
        min.innerHTML = returnData(countMin);
        hour.innerHTML = returnData(countHour);
    }
})

pause.addEventListener("click", () => {
    clearInterval(cron);
})

reset.addEventListener("click", () => {
    clearInterval(cron);
    
    countHour = 0
    countMin = 0
    countSec = 0
    countMilli = 0

    sec.innerHTML = '00'
    min.innerHTML = '00'
    hour.innerHTML = '00'
})