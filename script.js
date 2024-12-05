
// Randomly return one of the following string values
// rock, paper, or scissors
 function getComputerChoice(){
    let random = Math.floor( Math.random() * 3) + 1;
    // Pre-assigned values for each option between 1-3
    switch (random) {
        case 1:
            return "rock";     
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("oops");
            break;
    }
   
   

 }
 // Prompts user for an input and return their choice if 
 //it is an appropriate option
function getHumanChoice(){
   //prompts user for option
    let choice = prompt("Enter Rock, Paper, or Scissors: ");
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return choice; 
        case "paper":
            return choice;
        case "scissors":
            return choice;        
        default:
            console.log("Incorrect input, try again!") 
            break;
    }
    
}

//The Rock, Paper, Scissors, game
function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let fiveRounds = 0;

    // Play a single round of game
    function playRound(userSelection, computerSelection){

       // console.log(userSelection);
       // console.log(computerSelection);
        if(userSelection === computerSelection){
            humanScore += 1;
            computerScore += 1;
            console.log("It's a draw");
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
                console.log("You win! Paper beats Rock.");
                return 0;
            }
            // "rock < paper": false
            else{
                  computerScore += 1;
                  console.log("You lose! Paper beats Rock.");
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
                console.log("You win! Rock beats Scissors.");
                return 0;
            }
            // "scissors < rock": false
            else{
                  computerScore += 1;
                  console.log("You lose! Rock beats Scissors.");
                  return 0;
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
                console.log("You lose! Scissors beats Paper.");
                return 0;
            }
            // "scissors < paper": false
            else{
                humanScore += 1;
                console.log("You win! Scissors beats Paper.");
                return 0;
            }
        }
    
    }
    
    // Play 5 rounds
    while(fiveRounds < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        fiveRounds += 1;
    }
    //Checks which score is larger
    if(humanScore === computerScore){
        console.log("The game is a draw!")
    }
    else if (humanScore > computerScore) {
        console.log("The human wins and takes it all!")
    }
    else{
        console.log("The computer wins, do better next time!")
    }

    return 0;
}
playGame();