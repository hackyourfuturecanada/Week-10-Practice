// Problem 1:
// Create a JavaScript code with global and local variable. Call your local variable outside of its function. Why do you receive an error?

let globalVariable = 'this is a global variable';

functionForVariables = () => {
  let localVariable = 'this is a local variable';

  console.log(
    'Calling the global variable from the function: ',
    globalVariable,
  );
  console.log('Calling the local variable from the function: ', localVariable);
};

functionForVariables();

//=ANSWER==>The reason why calling the local variable failed is that we do not have access from here to the inside of the function. Function's inside is out of the scope.
// console.log(
//   'Calling the local variable from outside of the function: ',
//   localVariable,
// );

// Problem 2:
// Create a program where a button acts like a counter. Everytime an user clicks on it, it counts up (starting from 0). Make sure you use closures (create two functions, one outer and one inner).

function counterFunction() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let counter = counterFunction();

document.getElementById('button').addEventListener('click', () => {
  document.getElementById('currentCount').innerHTML = counter();
});

// Problem 3:
// Create a program with a button. When an user clicks on the button, the program executes an alert stating “the user has clicked!”

document.getElementById('alert').addEventListener('click', () => {
  alert('the user has clicked!');
});

// Problem 4:
// Create a form where the user is asked to enter their first and last name. Also, create a reset button, so that when an user clicks reset, the form is reset(their input is deleted).

function resetForm() {
  document.getElementById('myForm').reset();
}

// Problem 5:

// ==ANSWER=>Following statement is added to the HTML file
//addalert = message => alert(message);
