
//Problem1
var carName="ford" //global variable



function myFunction() {
  var carName2 = carName + "is a junk" //local variable
 }

myFunction();//we will get undifened beacuse we have to use return inside myFunction to see value







//***********************************************************************************************************************

//Problem2


var number =0

function counter() {
  
  number++;
  document.getElementById("p").innerHTML=number;
  
  }

document.getElementById("button").addEventListener("click", counter);


//***********************************************************************************************************************

//Problem3

function alertNew(){
  
  alert("the user has clicked!");
}



//***********************************************************************************************************************

//Problem4


function resetİnfo(){
  document.querySelector('forms').reset();
  
}

//***********************************************************************************************************************

//Problem5


 const addalert = function newf(paramet) {
        document.getElementById("demo").innerHTML = paramet;
    }


try {
    addalert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
