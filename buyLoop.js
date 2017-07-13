var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

var bank = 1000 // start the player with $1,000

console.log("You have $1,000"); // tell the player

var inventory = ["Hyrule Sword", "Potion", "Shield", "Bow"];

//prompt the user if the player wants to buy an item

var answer = prompt("Would you like to buy a " + inventory[0]);

for (var x = 0; x < inventory.length; x++){
var answer = prompt('Would you like to buy a ' + inventory[x]);

if(answer === "yes"){

    bank = bank - 100;

    console.log("You have " + bank + " left");
}
}

var promptSync = require('prompt-sync')();

var money = 1000;
var items = [];

while(money>99){
  console.log("You have $"+ money +" left. Hyrule Sword = $500, Bow = $100, Potion = $100, Shield = $300 ");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Hyrule Sword"){
    money = money - 500;
    items.push("Hyrule Sword");
    console.log("You bought a Hyrule Sword!");
  }else if(answer == "Bow"){
    money = money - 100;
    items.push("Bow");
    console.log("You bought a Bow!");

        }else if(answer == "Potion"){
    money = money - 100;
    items.push("Potion");
    console.log("You bought a Potion!");

    }else if(answer == "Shield"){
    money = money - 300;
    items.push("Shield");
    console.log("You bought a Shield!");

  }else{
    console.log("I didn't understand your answer. Try again.");
  }
}
