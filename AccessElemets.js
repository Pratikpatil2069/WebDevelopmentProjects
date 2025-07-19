// Document object model (dom).
// Documnet is an a object that call by using window object.
//window object is a browser object.
window.console.log(window.document); // this method is use to display html code.
window.console.dir(window.document); //this method is use to display properties and function in any object.

// Selecting elements in html by using their id.
let name=document.getElementById("byId");
console.dir(name);
console.log(name);

// selecting elements by using there class.
let name2=document.getElementsByClassName("byClass");
console.dir(name2);
console.log(name2);

// selecting elements by using tag.
let name3=document.getElementsByTagName("p");
console.dir(name3);
console.log(name3);

// slecting elements deppending on whta we are passing in function.
// by tag.
let name4=document.querySelector("p");
console.dir(name4);
// by class.
let name5=document.querySelectorAll(".byClass");
console.dir(name4);
// by id.
let name6=document.querySelector("#byId");
console.dir(name6);