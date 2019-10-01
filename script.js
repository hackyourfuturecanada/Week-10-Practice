// problem 1 = the function dosent understand what to do if you dont define it's mission.
var animal = "dogs" 

function smallAnimals(){
  var bigAnimal = animal + " are cute"

  return bigAnimal;
}

smallAnimals();


//problem 2 = 

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").textContent = clicks;
};

//problem 3 = 

function glass(){

    alert("the user has clicked");

}

//problem 4 =

function clearinfo (){
    document.querySelector("forms").reset();

}

//problem 5 =

const addalert = function newf(paramet) {
    document.getElementById("demo").innerHTML = paramet;
}


try {
addalert("Welcome guest!");
}
catch(err) {
document.getElementById("demo").innerHTML = err.message;
}



