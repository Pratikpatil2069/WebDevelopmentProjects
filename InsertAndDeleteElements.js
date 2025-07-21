// before adding the elements first we create the elements.
let elemnt=document.createElement("p");
elemnt.innerText="from kolhapure";

// after creating then element insert .
// fist accessing element in that element we insert our created element.
let div=document.querySelector("div");

// afert accesing elemet we decide where it is palced 
// placed in end of div.
//div.append(elemnt);

// placed in start of div.
//div.prepend(elemnt);

//placed outside the div and before the div.
//div.before(elemnt);

//placed outside thr div abd after the div.
div.after(elemnt);

//deleting element.
//div.remove();