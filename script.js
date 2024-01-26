let arr = ["rock", "paper", "sissors"];
let cpuPoint = 0;
let userPoint = 0;
let resultPart = document.querySelector(".result");

function print(str) {
    resultPart.insertAdjacentHTML("beforeend", str);
}

function playGame(userChoice) {
    let cpu = Math.floor(Math.random() * 3);
    let cpuChoice = arr[cpu];

    let result;
    if (userChoice === cpuChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && cpuChoice === "sissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "sissors" && cpuChoice === "paper")
    ) {
        result = "You win!";
        userPoint++;
    } else {
        result = "CPU wins!";
        cpuPoint++;
    }

    let str = `<div class="row"><p>CPU: ${cpuChoice.toUpperCase()}</p><p>USER: ${userChoice.toUpperCase()}</p><p class="output">Result: ${result}</p><hr></div>`;
    print(str);
}

document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("sissors");
});

document.getElementById("clear").addEventListener("click", function () {
    let str = `<h4>Result</h4> <hr class="normal">`
    resultPart.innerHTML = str
});

document.getElementById("point").addEventListener("click", function () {

    if (cpuPoint === userPoint){
        let str = `<div class="row"><p>CPU: ${cpuPoint}</p><p>USER: ${userPoint}</p><p class="output">Result: Both of you have same points now.</p><hr></div>`;
        print(str);
    }

    else if (cpuPoint > userPoint){
        let str = `<div class="row"><p>CPU: ${cpuPoint}</p><p>USER: ${userPoint}</p><p class="output">Result: CPU is leading with ${cpuPoint-userPoint} point.</p><hr></div>`;
        print(str);
    }

    else{
        let str = `<div class="row"><p>CPU: ${cpuPoint}</p><p>USER: ${userPoint}</p><p class="output">Result: You are leading with ${userPoint-cpuPoint} point.</p><hr></div>`;
        print(str);
    }
});