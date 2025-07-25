let userScore=0;
let compScore=0;

let images=document.querySelectorAll(".images");

let msg=document.querySelector("#msg");

let userScorepara=document.querySelector("#user_score");
let compScorepara=document.querySelector("#comp_score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return options[ind];
}

let drawGame=()=>{
    msg.innerText="game was Draw, play again!";
    msg.style.backgroundColor="#081b31";
}

let shoWinner=(userWin,imagesId,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
         msg.innerText=" you win! your "+imagesId+" beats "+compChoice;
         msg.style.backgroundColor="green";
    }else{
        compScore++
        compScorepara.innerText=compScore;
         msg.innerText="you loss! "+imagesId+" beats your "+compChoice;
         msg.style.backgroundColor="red";
    }
}
const playGame=(imagesId)=>{
    let compChoice=genCompChoice();
    if(imagesId===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(imagesId==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(imagesId==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }else{
            userWin=compChoice==="rock" ? false:true;
        }
        shoWinner(userWin,imagesId,compChoice);
    }
    

}
images.forEach((images)=>{
   images.addEventListener("click",()=>{
    const imagesId=images.getAttribute("id");
    playGame(imagesId);
   });
});