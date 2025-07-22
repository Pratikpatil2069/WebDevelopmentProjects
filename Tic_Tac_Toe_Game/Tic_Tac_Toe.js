let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let msg=document.querySelector(".hide");
let message=document.querySelector(".message");


let turnO=true;

let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        winner();
    })
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=>{
    message.innerText="Congratulations, Winner is "+winner;
    msg.classList.remove("hide");
    disabledBoxes();
}
const winner =()=>{
    for(let patter of arr){
        let p1=boxes[patter[0]].innerText;
        let p2=boxes[patter[1]].innerText;
        let p3=boxes[patter[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
        if(p1==p2 && p2==p3){
            showWinner(p1);
        }
        }
    
    }
}

reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);