let name=document.querySelector("p");
// accessing tag name.
console.log(name.tagName);

//accessing innerText.
let v=document.querySelector("div");
console.log(v.innerText);

// accessing innerText and html tags.
console.log(v.innerHTML);

// accessing hidden element text.
let hidden=document.querySelector("h2");
console.log(hidden.textContent);

// accessing element and modifies text.
name.innerText=name.innerText+" patil";

// accessing nodeList and change text in all elemets in nodeList.
let boxs=document.querySelectorAll(".box");
boxs[0].innerText="pratik";
boxs[1].innerText="annaso";
boxs[2].innerText="patil";

// we can use loops also.
for(box of boxs){
    console.log(box.innerText);
}

