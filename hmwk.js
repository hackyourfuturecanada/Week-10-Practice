/*Problem 1:
Create a JavaScript code with global and local variable.
Call your local variable outside of its function. Why do you receive an error?
*/
let a = 2;
function summ(num, numbb){
  let b = 1;
  return a + b;
};
console.log(a);// is shown as 2
console.log(b);// b is not available outside of its local scope
/*Problem 2:
Create a program where a button acts like a counter.
Everytime an user clicks on it, it counts up (starting from 0).
Make sure you use closures (create two functions, one outer and one inner). */
function clickMe() {
  let count = 0;
  function nowCount(){
  count += 1;
}
  return nowCount;
};
/*
Problem 3:
Create a program with a button. When an user clicks on the button,
the program executes an alert stating “the user has clicked!”
*/
let c = document.getElementById("third");
c.onclick = function() {
  let write = alert "the user has clicked"
  c.innerHTML = write;
};

/*Create a form where the user is asked to enter their first and last name.
Also, create a reset button, so that when an user clicks reset,
the form is reset(their input is deleted).*/
<html>
<head>
    <title>Registration form</title>
</head>

<body>
    <script type="text/javascript">
    function click() {
        document.getElementById("myForm").reset();
    };
    </script>

<form id="myForm">
    <h1>User Information</h1>
    <hr>

    <label for="firstname"><b>First Name</b></label>
    <input type="text" placeholder="Enter your first name" name="firstname" required>

    <label for="lastname"><b>Last Name</b></label>
    <input type="text" placeholder="Enter your last name" name="lastname" required>

    <hr>
    <button type="reset" onClick="click()">Reset</button>
  </form>

  </body>
  </html>


  /*Consider the code below. Try running this code in your browser.
  You will be outputted with an error.
   Fix the code so “Welcome Guest” appears.*/

  <html>
<body>

<p id="demo"></p>

<script>
try {
    alert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
</script>

</body>
</html>
