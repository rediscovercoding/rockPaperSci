console.log("Hello");
// let userChoice = prompt("Please enter Rock/Paper/Scissor");
// console.log("You chose " +userChoice);
// userChoice = userChoice.toUpperCase();
let userScore = 0;
let compScore = 0;

function playRound(userChoice){
let compChoice = Math.round(Math.random()*10);
console.log("User Chose "+userChoice);

const container = document.querySelector('#container');
const div = document.createElement('div');
div.style.color='blue';


if (compChoice === 1 || compChoice === 4 || compChoice ===7|| compChoice ===0){
    console.log("Computer chose Rock");
    div.textContent="Computer Chose Rock";
}
else if (compChoice === 2 || compChoice === 5 || compChoice ===8){
    console.log("Computer chose Paper");
    div.textContent="Computer Chose Paper";
}
else {
    console.log("Computer chose Scissors");
    div.textContent="Computer Chose Scissors";
}

container.appendChild(div);
const div1 = document.createElement('div');
const div2 = document.createElement('div');

if (userChoice==="ROCK" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)) {
    console.log("You lose. Paper covers Rock");
    div1.textContent="You lose. Paper covers Rock";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore; 
}
else if (userChoice==="PAPER" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    console.log("You Win. Paper covers Rock");
    div1.textContent="You Win. Paper covers Rock";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}

else if (userChoice==="SCISSORS" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    console.log("You lose. Rock breaks Scissors");
    div1.textContent="You lose. Rock breaks Scissors";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="ROCK" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)) {
    console.log("You Win. Rock breaks Scissors");
    div1.textContent="You Win. Rock breaks Scissors";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="PAPER" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)){
    console.log("You lose. Scissors cuts Paper");
    div1.textContent="You lose. Scissors cuts Paper";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="SCISSORS" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)){
    console.log("You Win. Scissors cuts Paper");
    div1.textContent="You Win. Scissors cuts Paper";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}

else{console.log("It is a tie.");
    div1.textContent="It is a tie";
    
    div2.textContent = "Score is: Compute:" +compScore + " User: " +userScore;
}

container.appendChild(div1);
container.appendChild(div2);
}