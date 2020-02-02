var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div  = document.querySelector(".score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){

  const choices = ["r", "p", "s"];

  const randomNumber = Math.floor(Math.random()* 3);

  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter == "p"){
    return "Paper";
  }
  if (letter == "r"){
    return "Rock";
  }
  if (letter == "s"){
    return "Scissors";
  }

}

function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You win!";

}

function lose(user, computer){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + ". You lose!";
}

function draw(user, computer){
  result_p.innerHTML = "It's a draw.";
}


function game(userChoice){
  const computerChoice = getComputerChoice();

  switch(userChoice + computerChoice){
    case "pr":
    case "rs":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;

  }

}

function main(){
  rock_div.addEventListener("click", function(){
    game("r");
  })

  paper_div.addEventListener("click", function(){
    game("p");
  })

  scissors_div.addEventListener("click", function(){
    game("s");
  })

}

main();
