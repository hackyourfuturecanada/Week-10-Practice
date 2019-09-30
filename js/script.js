//1- Create a JavaScript code with global and local variable. Call your local variable outside of its function. Why do you receive an error?
//this is global variable.
const name = "Fares";

const sayHello = () => {
    let printName = "Hello " + name ;
    return printName;
};

console.log(sayHello());
//console.log(printName); //printName is not defined // this error because we are using local variable out side the funcuion which mean the variable is not founded


//2- Create a program where a button acts like a counter. Everytime an user clicks on it, it counts up (starting from 0). Make sure you use closures (create two functions, one outer and one inner).
document.querySelector('#counterButton').addEventListener('click', function(e) {
    if(this.innerHTML === "Click me"){ this.textContent = 0; }

    const addOne = () => {
        this.textContent = Number(this.textContent) + 1;
    };
    addOne();
});



//3- Create a program with a button. When an user clicks on the button, the program executes an alert stating “the user has clicked!”
document.getElementById('clickAlert').addEventListener('click', function(){
    alert("the user has clicked!");
})

//4- Create a form where the user is asked to enter their first and last name. Also, create a reset button, so that when an user clicks reset, the form is reset(their input is deleted).
//this can be done by button type if I use it like this type="reset"
//if you want it in javaScript so this is the code
document.getElementById('jsReset').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('form').reset();
})
