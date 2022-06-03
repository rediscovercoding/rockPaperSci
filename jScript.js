console.log("Hello");
let userChoice = prompt("Please enter Rock/Paper/Scissor");
console.log("You chose " +userChoice);
userChoice = userChoice.toUpperCase();

let compChoice = Math.round(Math.random()*10);

if (compChoice === 1 || compChoice === 4 || compChoice ===7|| compChoice ===0){
    console.log("Computer chose Rock")
}
else if (compChoice === 2 || compChoice === 5 || compChoice ===8){
    console.log("Computer chose Paper")
}
else {
    console.log("Computer chose Scissors")
}




if (userChoice==="ROCK" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)) {
    console.log("You lose. Paper covers Rock")
}
else if (userChoice==="PAPER" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    console.log("You Win. Paper covers Rock")
}
else if (userChoice==="SCISSORS" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    console.log("You lose. Rock breaks Scissors")
}
else if (userChoice==="ROCK" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)) {
    console.log("You Win. Rock breaks Scissors")
}
else if (userChoice==="PAPER" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)){
    console.log("You lose. Scissors cuts Paper")
}
else if (userChoice==="SCISSORS" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)){
    console.log("You Win. Scissors cuts Paper")
}

else{console.log("It is a tie.")}