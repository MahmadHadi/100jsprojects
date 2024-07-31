const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const output = document.querySelector(".output");
const userWin = document.querySelector(".userWinCount");
const computerWin = document.querySelector(".computerWinCount");

let userInput = "";
let computerInput = "";

let userWinCount = 0;
let computerWinCount = 0;

const options = ["rock", "paper", "scissor"];

let random = Math.floor(Math.random() * 3);
rock.addEventListener("click", () => {
    random = Math.floor(Math.random() * 3);

    computerInput = options[random];
    userInput = "rock";
    check();
});
paper.addEventListener("click", () => {
    random = Math.floor(Math.random() * 3);

    computerInput = options[random];
    userInput = "paper";
    check();
});
scissor.addEventListener("click", () => {
    random = Math.floor(Math.random() * 3);

    computerInput = options[random];
    userInput = "scissor";
    check();
});

function check() {
    if (userInput == computerInput) {
        output.innerHTML = "It's a tie!";
    } else if (
        (userInput == "rock" && computerInput == "paper") ||
        (userInput == "paper" && computerInput == "scissor") ||
        (userInput == "scissor" && computerInput == "rock")
    ) {
        output.innerHTML = `You lose! ${computerInput} beats ${userInput}`;
        computerWinCount++;

        computerWin.innerHTML = computerWinCount;
    } else {
        output.innerHTML = `You win! ${userInput} beats ${computerInput}`;
        userWinCount++;
        userWin.innerHTML = userWinCount;
    }
}
