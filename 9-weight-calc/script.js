const ans = document.querySelector(".ans");
const input = document.querySelector("#weight");
let pound = 0;

input.addEventListener("keypress", async () => {
    setTimeout((e) => {
        pound = input.value;
        ans.innerHTML = (input.value / 2.205).toFixed(2);

        console.log(e);
    }, 0);
});
