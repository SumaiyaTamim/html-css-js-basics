const btnEle = document.querySelectorAll("button")
const userScoreEle = document.getElementById("user-score")
const compScoreEle = document.getElementById("comp-score")
const resultEle = document.getElementById("result")

let userScore = 0;
let compScore = 0;

btnEle.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const result = playRound(btn.id, compChoice());
        resultEle.textContent = result;
    })
})

function compChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice]
}

function playRound(userSelection, compSelection){
    if(userSelection === compSelection){
        return "It's a tie!"
    }else if(
        (userSelection === "rock" && compSelection === "scissor") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissor" && compSelection === "paper")
    ){
        userScore++
        userScoreEle.textContent = userScore;
        return `You won! ${userSelection} beats ${compSelection}`
    }else{
        compScore++
        compScoreEle.textContent = compScore
        return `You lose! ${compSelection} beats ${userSelection}`
    }
}