//Create a JavaScript code with global and local variable. Call your local variable outside of its function. Why do you receive an error?
let number = 0;
function myFunction(){
  let x = 5;
}
// console.log(x);

// because variable x is block scope

//Create a program where a button acts like a counter. Everytime an user clicks on it, it counts up (starting from 0). Make sure you use closures (create two functions, one outer and one inner).

function counter(){
  let number = 0;
  function increment(){
     number++;
     console.log(number);
     return number;
  }
  return increment;
}
let z = counter();
document.getElementById('click').addEventListener('click', z);

//Problem 3: Create a program with a button. When an user clicks on the button, the program executes an alert stating “the user has clicked!” 

document.getElementById('Hamam').addEventListener('click', function(){
  alert('the user has clicked!')
});
