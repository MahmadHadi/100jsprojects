// *    &#9856; -> 1
// *    &#9857; -> 2
// *    &#9858; -> 3
// *    &#9859; -> 4
// *    &#9860; -> 5
// *    &#9861; -> 6

const btn = document.querySelector(".btn");
const dice = document.querySelector(".dice");
const outputContainer = document.querySelector(".show-op");

outputContainer.innerHTML = "";
btn.addEventListener("click", async () => {
    dice.style.animationName = "roll-dice";

    setTimeout(() => {
        dice.style.animationName = "";
    }, 1700);

    setTimeout(showOutput, 1700);
});
let result = "";
let count = 1;  

function showOutput() {
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);

    if (num == 1) {
        result = "&#9856";
    } else if (num == 2) {
        result = "&#9857";
    } else if (num == 3) {
        result = "&#9858";
    } else if (num == 4) {
        result = "&#9859";
    } else if (num == 5) {
        result = "&#9860";
    } else if (num == 6) {
        result = "&#9861";
    }

    dice.innerHTML = result;
    outputContainer.innerHTML += `<div class="output-container | flex">

                <div class="op-left">
                    Roll ${count}: 
                </div>
                <div class="op-right">
                    ${result}
                </div>
            </div>`;
    count++;
    console.log(count);
    
}
