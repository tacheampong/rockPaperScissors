const results = document.querySelector(".content");
// const humanChoice = document.querySelectorAll("button");
const humanChoice = document.querySelectorAll("button");
let choice;
humanChoice.forEach(element => {
    element.addEventListener("click", () => {
    choice = element.textContent;
    getHumanChoice();
    });
});
console.log(humanChoice)
// console.log(choice);
//humanChoice.addEventListener("click", getHumanChoice);

// humanChoice.forEach(element => {
//    element.addEventListener("click", getHumanChoice);
// });

// Randomly return one of the following string values
// rock, paper, or scissors
 function getComputerChoice(){
    let random = Math.floor( Math.random() * 3) + 1;
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
 // Prompts user for an input and return their choice if 
 //it is an appropriate option
function getHumanChoice(){
   //prompts user for option
    // let choice = prompt("Enter Rock, Paper, or Scissors: ");
   // const errorMesage = document.createElement("p");
    choice = choice.toLowerCase();
    // switch (choice) {
    //     case "rock":
    //         return choice; 
    //     case "paper":
    //         return choice;
    //     case "scissors":
    //         return choice;        
    //     default:
    //         errorMesage.textContent = "Incorrect input, try again!";
    //         results.appendChild(errorMesage);
    //         break;
    //}
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    
}
let humanScore = 0;
let computerScore = 0;
let fiveRounds = 0;
    // Play a single round of game
    function playRound(userSelection, computerSelection){
     
 
        const draw = document.createElement("p");
        const paperBeatRock = document.createElement("p");
        const rockBeatScissors = document.createElement("p");
        const scissorsBeatPaper = document.createElement("p");
        const finalResult = document.createElement("p");
    
           // console.log(userSelection);
           // console.log(computerSelection);
            if(userSelection === computerSelection){
                humanScore += 1;
                computerScore += 1;
                draw.textContent = "It's a draw";
                results.appendChild(draw);
                // console.log("It's a draw");
                return 0;
            }
            // rock vs paper or paper vs rock
            else if( (userSelection === "rock" ||  userSelection === "paper")  
                &&
                (computerSelection === "rock" || computerSelection === "paper")
        
            ){
                // "paper" < "rock": true
                if (userSelection < computerSelection) {
                    humanScore += 1;
                    paperBeatRock.textContent = "You win! Paper beats Rock.";
                    results.append(paperBeatRock);
                    //console.log("You win! Paper beats Rock.");
                }
                // "rock < paper": false
                else{
                      computerScore += 1;
                      paperBeatRock.textContent = "You lose! Paper beats Rock.";
                      results.append(paperBeatRock);
                      //console.log("You lose! Paper beats Rock.");
                }
            }
            // rock vs scissors or scissors vs paper
            else if ( (userSelection === "rock" ||  userSelection === "scissors")  
                &&
                (computerSelection === "rock" || computerSelection === "scissors")
        
            ) {
                 // "rock" < "scissors": true
                 if (userSelection < computerSelection) {
                    humanScore += 1;
                    rockBeatScissors.textContent = "You win! Rock beats Scissors.";
                    results.append(rockBeatScissors);
                    //console.log("You win! Rock beats Scissors.");
                }
                // "scissors < rock": false
                else{
                      computerScore += 1;
                      rockBeatScissors.textContent = "You lose! Rock beats Scissors.";
                      results.append(rockBeatScissors);
                     // console.log("You lose! Rock beats Scissors.");
                }
                
            }
            //paper vs scissors or scissors vs paper
            else if ( (userSelection === "paper" ||  userSelection === "scissors")  
                &&
                (computerSelection === "paper" || computerSelection === "scissors")
        
            ) {
                 // "paper" < "scissors": true
                 if (userSelection < computerSelection) {
                    computerScore += 1;
                    scissorsBeatPaper.textContent = "You lose! Scissors beats Paper.";
                    results.append(scissorsBeatPaper);
                    // console.log("You lose! Scissors beats Paper.");
                }
                // "scissors < paper": false
                else{
                    humanScore += 1;
                    scissorsBeatPaper.textContent = "You win! Scissors beats Paper.";
                    results.append(scissorsBeatPaper);
                    // console.log("You win! Scissors beats Paper.");
                }
            }
            // console.log(humanScore);
            // console.log()
              //Checks which score is larger
    if(humanScore >= 5 || computerScore >= 5){
        if(humanScore === computerScore){
            finalResult.textContent = "The game is a draw";
            results.appendChild(finalResult);
            setTimeout(() => {
                resetGame();
            }, 4000);            //console.log("The game is a draw!")
        }
        else if (humanScore > computerScore) {
            finalResult.textContent = "The human wins and takes it all!";
            results.appendChild(finalResult);
            setTimeout(() => {
                resetGame();
            }, 4000);            //console.log("The human wins and takes it all!")
        }
        else{
            finalResult.textContent = "The computer wins, do better next time!";
            results.appendChild(finalResult);
            setTimeout(() => {
                resetGame();
            }, 4000);            //console.log("The computer wins, do better next time!")
        }
    }
        
        }
function resetGame(){
    results.replaceChildren();
    humanScore = 0;
    computerScore = 0;
    
}
//The Rock, Paper, Scissors, game
function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let fiveRounds = 0;


    
    // Play 5 rounds
    while(fiveRounds < 5){
        // let humanChoice = getHumanChoice();
        // let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        fiveRounds += 1;
    }
    //Checks which score is larger
    if(humanScore >= 5 || computerScore >= 5){
        if(humanScore === computerScore){
            console.log("The game is a draw!")
        }
        else if (humanScore > computerScore) {
            console.log("The human wins and takes it all!")
        }
        else{
            console.log("The computer wins, do better next time!")
        }
    }
    
  

    return 0;
}
// playGame();