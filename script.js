//Problem 1

var obj1 = "I am global";
function check(){
    var obj2 = "I am local";
}

console.log(obj1);
console.log(obj2);

/* We got an error because. We can't reach local variables outside of the function.
 They can only be accessed from within the function. */

//Problem 2

var counter = 0;
    function onClick() {
      counter += 1;
      document.getElementById("clicks").innerHTML = counter;
    };

 //Problem 3

 function alertFunction(){
     alert("the user has clicked!")
 }

 document.getElementById("clickbutton").addEventListener("click", alertFunction);

 //Problem 4

 function nameFunction() {
   var x = document.getElementById("nameForm");
   document.getElementById("demo").innerHTML = x;

   document.getElementById("nameForm").reset();
 }
