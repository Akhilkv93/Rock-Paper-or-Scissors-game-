let rockButton=document.querySelector('.rock')
let paperButton=document.querySelector('.paper')
let scissorsButton=document.querySelector('.scissors')
let computerSpan=document.querySelector('.computer-selection')
let userSpan=document.querySelector('.user-selection')
let userScoreSpan=document.querySelector(".user-score")
let computerScoreSpan=document.querySelector(".computer-score")
let result=document.querySelector('.result');
let playContainer=document.querySelector("#status")

let array=["rock","paper","scissors"];
let userScore=0;
let computerScore=0;
rockButton.addEventListener("click",()=>play("rock"))
paperButton.addEventListener("click",()=>play('paper'))
scissorsButton.addEventListener("click",()=>play('scissors'))

function play (data){

let userSelection=data;
let computerOption=computerSelection();
playContainer.style.display="block"
userSpan.textContent=userSelection;
computerSpan.textContent=computerOption;

if(userSelection===computerOption){
    result.textContent="-match tied-";
}else if( (userSelection === "rock" && computerOption === "scissors") ||
(userSelection === "scissors" && computerOption === "paper") ||
(userSelection === "paper" && computerOption === "rock")){
    userScore++;
    userScoreSpan.textContent=userScore
result.textContent='-you win-'
}else{
computerScore++;
computerScoreSpan.textContent=computerScore
    result.textContent='-you lose-'
}

}






function computerSelection(){
   let index= Math.floor(Math.random()*(array.length));
   return array[index]
}