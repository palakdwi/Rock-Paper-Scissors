let userScore=0
    compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score")
    scoreBoard_div=document.querySelector(".score-board")
    result_p=document.querySelector(".results > p")
    rock_div=document.getElementById("r")
    paper_div=document.getElementById("p")
    scissors_div=document.getElementById("s");

function getCompChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    else return "scissors";
}

const win = (user,comp) => {
    userScore++;
    const userChoice_div=document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML= `${convertToWord(user)} beats ${convertToWord(comp)} User Wins!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
const lose = (user,comp) => {
    compScore++;
    const userChoice_div=document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML= `${convertToWord(user)} loses to ${convertToWord(comp)} User Loses!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
const draw = (user,comp) => {
    result_p.innerHTML= `${convertToWord(user)} equals ${convertToWord(comp)} It's a Draw!!`;
    const userChoice_div=document.getElementById(user);
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice){
    const compChoice=getCompChoice();
    switch(userChoice + compChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,compChoice);
            break;
    }
}

main();

function main(){
    rock_div.addEventListener("click",() => {
        game("r");
    });
    
    paper_div.addEventListener("click",() => {
        game("p");
    });
    
    scissors_div.addEventListener("click",() => {
        game("s");
    });  
}



