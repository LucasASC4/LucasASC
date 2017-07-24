function rand(num){

var randNum = Math.random()*num;
var result = Math.floor(randNum);
return result;
}

var myAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randletter(){
    return myAlphabet[rand(26)]
}
var word = ""
function randWord(){
    var wordLength = Math.ceil(Math.random()*10) + 1

for( i=0; i < wordLength; i++){
    word = word + randletter();
}
return word
}
console.log(randWord());

var sentence = ""

function randSentence(){
    var sentenceLength = Math.ceil(Math.random()*10) +1
for(i=0; i < sentenceLength; i++){

    
}}