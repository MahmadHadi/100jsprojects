const amount = document.querySelector("#amount");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".btn");
const total = document.querySelector(".total");

total.innerHTML = ''

btn.addEventListener("click", () => {

    let ans = parseFloat(amount.value) + parseFloat(tip.value * amount.value / 100);
    total.innerHTML = ans.toFixed(2);
})