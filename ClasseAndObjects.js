// create a object.
const employee={
    name:"pratik patil",
    salary(){
        console.log("20000");
    },
};
// create a second object.
const pratik={
    id:1,
    salary(){
        console.log("50000");
    },
};
// pratik extends employee.
pratik.__proto__=employee;

// createing a class.

class Demo{
    // this is constructor.
    constructor(){
        console.log("i am constructor!");
    }
    name(){
        console.log("pratik");
    }

    age(){
        console.log("21");
    }
}

// making object of above class.
let d=new Demo();
console.log(d);

//inheritance.

class parent{
    name(){
        console.log("my name is parent");
    }

    good(){
        console.log("good morning");
    }
}

// extending perent class in child class.
class child extends parent{
    name(){
        console.log("my name is child!");
    }

    hello(){
        console.log("hello");
    }

}

let obj=new child();

// use of super keyWord.

class person{
    constructor(name){
        console.log(name);
    }
    call(){
        console.log("hello");
    }

}

class enginner extends person{
    constructor(branch){
        super("pratik");
        console.log(branch)
    }

    meth() {
        super.call();
        console.log("pratik");
    }
}

let en=new enginner("cse");

// try catch block.
// it maontain the flow of programm.
console.log("welcome");
try{
    console.log(c);
}catch(err){
    console.log(err);
}
console.log("to sitcoe");
