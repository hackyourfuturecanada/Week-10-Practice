// Problem 1:Create a JavaScript code with global and local variable. Call your local variable outside of its function. Why do you receive an error?
console.log("problem 1 -----------");
let global = "global variable";

for(let i = 0; i<3; i++){
    let local = "local variable";
    console.log("inside", local);
}

console.log("outside", global);
// ANSWER: we can't call local variable from outside. we get error "local variable is not defined". because if you assign varibale inside any loob or function. you can use only inside this loob or function
// console.log("outside", local);
// --------------------------
// Problem 2:Create a program where a button acts like a counter. Everytime an user clicks on it, it counts up (starting from 0). Make sure you use closures (create two functions, one outer and one inner). 
console.log("problem 2 -----------");
const p2like = document.getElementsByClassName("p2like")[0];
let likeCounter = document.getElementsByClassName("likecounter")[0];
var counter = 0;
var like = (function(){
    return function(){
        return  counter +=1;
    }
})();
p2like.addEventListener("click",function(){
    like();
    likeCounter.innerHTML = counter;
})



// Problem 3: Create a program with a button. When an user clicks on the button, the program executes an alert stating “the user has clicked!” 
console.log("problem 3 -----------");
const p3click = document.getElementsByClassName("p3click")[0];
console.log(p3click);
p3click.addEventListener("click", function(){
    console.log("clicked");
    alert("the user has clicked!");
})

// Problem 4: Create a form where the user is asked to enter their first and last name. Also, create a reset button, so that when an user clicks reset, the form is reset(their input is deleted).
const fullName = document.getElementById("fullName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const createButton = document.getElementById("create");
const deleteButton = document.getElementById("delete");
console.log(createButton);
createButton.addEventListener("click", function(){
    alert("Your first and last name " + firstName.value + " " + lastName.value);
});
deleteButton.addEventListener("click",function(){
    fullName.reset();
})

// Problem 5: Consider the code below. Try running this code in your browser. You will be outputted with an error. Fix the code so “Welcome Guest” appears.

function addalert(content){
    document.getElementById("demo").innerHTML = content;
}
try {
    addalert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
