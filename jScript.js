
// let userChoice = prompt("Please enter Rock/Paper/Scissor");
// console.log("You chose " +userChoice);
// userChoice = userChoice.toUpperCase();
let userScore = 0;
let compScore = 0;

function playRound(userChoice){
    


    if(userScore < 5 && compScore < 5){

    let cleardiv= document.querySelectorAll('.buttonClass');
    for (each of cleardiv){
        each.parentElement.removeChild(each);
        
    }


let compChoice = Math.round(Math.random()*10);
const container = document.querySelector('#container');
const div = document.createElement('div');
div.style.color='aquamarine';


if (compChoice === 1 || compChoice === 4 || compChoice ===7|| compChoice ===0){
    
    div.textContent="Computer Chose Rock";
}
else if (compChoice === 2 || compChoice === 5 || compChoice ===8){
    
    div.textContent="Computer Chose Paper";
}
else {
    
    div.textContent="Computer Chose Scissors";
}

container.appendChild(div);
const div1 = document.createElement('div');
const div2 = document.createElement('div');


if (userChoice==="ROCK" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)) {
    
    div1.textContent="You lose. Paper covers Rock";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore; 
}
else if (userChoice==="PAPER" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    
    div1.textContent="You Win. Paper covers Rock";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}

else if (userChoice==="SCISSORS" && (compChoice===1 ||compChoice ===4 ||compChoice ===7|| compChoice ===0)){
    
    div1.textContent="You lose. Rock breaks Scissors";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="ROCK" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)) {
    
    div1.textContent="You Win. Rock breaks Scissors";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="PAPER" && (compChoice===3 ||compChoice ===6 ||compChoice ===9|| compChoice ===10)){
    
    div1.textContent="You lose. Scissors cuts Paper";
    compScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}
else if (userChoice==="SCISSORS" && (compChoice===2 ||compChoice ===5 ||compChoice ===8)){
    
    div1.textContent="You Win. Scissors cuts Paper";
    userScore++;
    div2.textContent = "Score is: Computer:" +compScore + " User: " +userScore;
}

else{console.log("It is a tie.");
    div1.textContent="It is a tie";
    
    div2.textContent = "Score is: Compute:" +compScore + " User: " +userScore;
}
div.classList.add('buttonClass');
div1.classList.add('buttonClass');
div2.classList.add('buttonClass');
div1.style.padding = '20px';
div2.style.padding = '10px';
container.appendChild(div1);
container.appendChild(div2);

}

else {
    let cleardiv= document.querySelectorAll('.buttonClass');
    for (each of cleardiv){
        each.parentElement.removeChild(each);
        
    }
    const div = document.createElement('div');
    div.style.color='aquamarine';
    div.textContent= "Final Score is Computer: "+compScore+ " User: "+userScore; 
    div.style.fontSize= 'larger';
    div.classList.add('buttonClass');
    
    container.appendChild(div);
    if (compScore > userScore){
        const div1 = document.createElement('div');
        div1.textContent= "Computer Won";
          
        div1.style.fontSize= 'larger';  
        div1.classList.add('buttonClass');
        container.appendChild(div1);    
        userScore = 0;
        compScore = 0;
    }
    else {
        const div1 = document.createElement('div');
        div1.textContent= "User Won";
        
        div1.style.fontSize= 'larger';
        div1.classList.add('buttonClass');
        container.appendChild(div1); 
        userScore = 0;
        compScore = 0;
    } 
    
}
}
