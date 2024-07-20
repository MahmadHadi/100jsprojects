const img = document.querySelector(".img img");
const para = document.querySelector(".main-para");
const name = document.querySelector(".name");
const box = document.querySelector(".box");

let arr = [
    {
        userName: "Rosetta Q",
        userPara:
            "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        userImg:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
        userName: "Cherise G",
        userPara:
            "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        userImg:
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
        userName: "Constantine V",
        userPara:
            "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        userImg:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
];

let i = 0;
function update() {
    console.log("hadi ");
    box.innerHTML = `<div class="img">
                        <img src="${arr[i].userImg}" alt="img1">
                    </div>
                    <p class="main-para">
                        ${arr[i].userPara}
                        </p>
                    <p class="name">
                        ${arr[i].userName}
                    </p>`;
    i++;
    if (i >= arr.length) 
        i = 0
}

setInterval(update, 2000);
