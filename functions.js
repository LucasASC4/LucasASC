
function rand(num){
// This function returns a number between 0 and num
var randNum = Math.random()*num; //Assign a random # to randNum
var result = Math.floor(randNum); //set randNum to non decimal #
return result;
} 

var myDice = ["one", "two", "three", "four", "five", "six"];
console.log("You rolled a " + myDice[rand(6)])