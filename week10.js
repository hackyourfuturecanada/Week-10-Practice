
/*Problem 1:
Create a JavaScript code with global and local variable. Call your local 
variable outside of its function. Why do you receive an error?
*/

//local variable
let course= "Programing";
function myFunction() {
	let courseName = "some stuff";
		
		}
//console.log(courseName);
//it is an error because the variable that inside the function no one can get to it.


//2Problem 2:
//Create a program where a button acts like a counter.
//Everytime an user clicks on it, it counts up (starting from 0). 
//Make sure you use closures (create two functions, one outer and one inner). 
let  outerFunction = function (){
	let number = 0;
	return	function(){
		number++;
		return number;
	}
}();

document.getElementById("dd").addEventListener('click', function(){
	
	document.getElementById("display").innerHTML= outerFunction();


});



/*3- Create a program with a button. When an user clicks on the button,
 the program executes an alert stating “the user has clicked!*/

document.getElementById('alert').addEventListener('click', function(){
    alert("the user has clicked!");
});

/*4- Create a form where the user is asked to enter their first and last name.
Also, create a reset button, so that when an user clicks reset, the form is reset
(their input is deleted).
this can be done by button type if I use it like this type="reset"
if you want it in javaScript so this is the code*/

document.getElementById('del').addEventListener('click', function(one){
    one.preventDefault();

    document.getElementById('for').reset();

    });