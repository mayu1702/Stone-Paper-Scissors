let user = 0;
let compUser=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compUserScore = document.querySelector("#comp-score"); 

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
   // console.log("game was draw");
    msg.innerText="Draw Game.. Play again";
    msg.style.backgroundColor="orange";
        msg.style.color="white";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        user++;
        userScore.innerText= user;
        //console.log("You Win");
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;    
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else{
        //console.log("You lose");
        compUser++;
        compUserScore.innerText= compUser;
        msg.innerText=`It's okay, ${compChoice} defeats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

}
const playGame =(userChoice)=>{
    //console.log("user choice = ", userChoice);
    const compChoice=genCompChoice();
    //console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice==="paper") {
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);

}};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
