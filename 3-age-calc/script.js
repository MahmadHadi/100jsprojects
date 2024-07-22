const btn = document.querySelector(".btn");
const ans = document.querySelector(".ans");
const date = document.querySelector("#date");
const dateObj = new Date();

function calculateAge() {
    let bdate = date.value.split("-")[0];
    let thisYear = dateObj.getFullYear();
    let age = thisYear - bdate;

    if (age <= 0) {
        ans.innerHTML = "Invalid input ";
    } else {
        ans.innerHTML =`Your age is ${thisYear - bdate} years old`;
    }

}

btn.addEventListener("click", calculateAge);
