// this is the url of api.
const url="https://cat-fact.herokuapp.com/facts";
let factPara=document.querySelector("#factPara");
let btn=document.querySelector("#btn");

// fetch methode is used to return a responce from server.
//we use async and await for complete execution of response.

let fun= async ()=>{
    let responce =await fetch(url);
    console.log(responce); // this data is in json format.
    let data = await responce.json();  // new this data in object format.
    console.log(data);
    factPara.innerText=data[2].text
}
btn.addEventListener("click",fun);