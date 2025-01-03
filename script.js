const results = document.querySelector(".content");
const humanChoice = document.querySelectorAll("button");

const humanOutput = document.querySelector(".human");
const computerOutput = document.querySelector(".computer");
// calls an event listener for each button choices
let choice;
humanChoice.forEach(element => {
    element.addEventListener("click", () => {
        choice = element.textContent;
        getHumanChoice();
    });
});

//append child element to parent then scroll to the current child
function appendChild(parrent, child) {

    parrent.appendChild(child);
    parrent.scrollTop = parrent.scrollHeight;

}

// Randomly return one of the following string values 
// rock, paper, or scissors
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    const errorMesage = document.createElement("p");
    // Pre-assigned values for each option between 1-3
    console.log("in the function")
    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            errorMesage.textContent = "oops";
            results.appendChild(errorMesage);
            // console.log("oops");
            break;
    }



}
// Gets choice from button click and uses the value in the round
function getHumanChoice() {
    choice = choice.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);

}

let humanScore = 0;
let computerScore = 0;
let fiveRounds = 0;
// Play a single round of the game
function playRound(userSelection, computerSelection) {


    const draw = document.createElement("p");
    const paperBeatRock = document.createElement("p");
    const rockBeatScissors = document.createElement("p");
    const scissorsBeatPaper = document.createElement("p");
    const finalResult = document.createElement("p");

    if (userSelection === computerSelection) {
        humanScore += 1;
        computerScore += 1;
        draw.textContent = "It's a draw";
        appendChild(results, draw);
    }
    // rock vs paper or paper vs rock
    else if ((userSelection === "rock" || userSelection === "paper")
        &&
        (computerSelection === "rock" || computerSelection === "paper")

    ) {
        // "paper" < "rock": true
        if (userSelection < computerSelection) {
            humanScore += 1;
            paperBeatRock.textContent = "You win! Paper beats Rock.";
            appendChild(results, paperBeatRock);
        }
        // "rock < paper": false
        else {
            computerScore += 1;
            paperBeatRock.textContent = "You lose! Paper beats Rock.";
            appendChild(results, paperBeatRock);
        }
    }
    // rock vs scissors or scissors vs paper
    else if ((userSelection === "rock" || userSelection === "scissors")
        &&
        (computerSelection === "rock" || computerSelection === "scissors")

    ) {
        // "rock" < "scissors": true
        if (userSelection < computerSelection) {
            humanScore += 1;
            rockBeatScissors.textContent = "You win! Rock beats Scissors.";
            appendChild(results, rockBeatScissors);
        }
        // "scissors < rock": false
        else {
            computerScore += 1;
            rockBeatScissors.textContent = "You lose! Rock beats Scissors.";
            appendChild(results, rockBeatScissors)
        }

    }
    //paper vs scissors or scissors vs paper
    else if ((userSelection === "paper" || userSelection === "scissors")
        &&
        (computerSelection === "paper" || computerSelection === "scissors")

    ) {
        // "paper" < "scissors": true
        if (userSelection < computerSelection) {
            computerScore += 1;
            scissorsBeatPaper.textContent = "You lose! Scissors beats Paper.";
            appendChild(results, scissorsBeatPaper)
        }
        // "scissors < paper": false
        else {
            humanScore += 1;
            scissorsBeatPaper.textContent = "You win! Scissors beats Paper.";
            appendChild(results, scissorsBeatPaper)
        }
    }
    humanOutput.textContent = humanScore;
    computerOutput.textContent = computerScore;
    //Checks which score is larger
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore === computerScore) {
            finalResult.textContent = "The game is a draw";
        }
        else if (humanScore > computerScore) {
            finalResult.textContent = "The human wins and takes it all!";
        }
        else {
            finalResult.textContent = "The computer wins, do better next time!";

        }
        appendChild(results, finalResult)
        //Times out and resets game
        setTimeout(() => {
            resetGame();
        }, 4000);
    }


}
function resetGame() {
    results.replaceChildren();
    humanOutput.replaceChildren();
    computerOutput.replaceChildren();
    humanScore = 0;
    computerScore = 0;

}
