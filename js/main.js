
/*
Aziz Omar
Practice week 10 
*/

//1 
// global variable, outmost scope
	let queen = " I am global ";

	function scopeDemo(){
		// local variable
		let pm = "I am local ";
	}

	//console.log(pm)
	// it throws an error because pm is only accessiable within the function 


//2

// create a counter that increment by clicking the button 
	let counter = function(){
		// hold counter value 
		let i = 0;	
		// return function that adds one to the initial value 
		return function add(){
			i++;
			return i;
		};

	// invoke outer function
	}();

	//add event listener to the button 
	document.getElementById("counter").addEventListener('click',function(event){
		// assign value of increment to dom 
			document.getElementById("output").innerHTML = counter();

	});

//3
	document.getElementById("notify").addEventListener('click',function(event){
		// assign value of increment to dom 
		alert("you click a button ");

	});

//4

	document.getElementById("resetBtn").addEventListener('click',function(e){
		e.preventDefault();
		document.forms[0].reset();

	});

//5
//line 8 with error: 
	// addalert("Welcome guest!");
	// some random characters are added to the object alert 

//line 8 after:
	// alert("Welcome guest!");

