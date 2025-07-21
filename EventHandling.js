//accessing element first
let btn1=document.querySelector("button");

btn1.onclick= ()=>{
    console.log("pratik patil");
}

//event listener.
btn1.addEventListener("click",()=>{
    console.log("button was clicked1");
});

let event= ()=>{
console.log("button was clicked2");
}
btn1.addEventListener("click",event);

btn1.addEventListener("click",()=>{
    console.log("button was clicked3");
});

//remove event listener.
btn1.removeEventListener("click",event);