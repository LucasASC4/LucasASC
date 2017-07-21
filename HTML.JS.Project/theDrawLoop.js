var myScore = 0
function setup(){
createCanvas(1200,1200)
background("green");
textSize(50);
textAlign(CENTER);
text("Please Type the Song Lyrics Below: ", 550, 100);
textSize(20)
textAlign(CENTER);
text("I see a little silhouetto of a man. Scaramouche, Scaramouche, will you do the Fandango?", 550, 200);
textSize(20)
 textAlign(CENTER);
 text("I'm just a poor boy, nobody loves me. He's just a poor boy from a poor family. Spare him his life from this monstrosity", 550, 300);
 textSize(30)
 textAlign(CENTER);
 text("Easy come, easy go, will you let me go? Bismillah! No, we will not let you go", 550, 400);
 textSize(20)
 textAlign(CENTER);
 text("So you think you can stone me and spit in my eye? So you think you can love me and leave me to die?", 550, 500);
 textSize(20)
 textAlign(CENTER);
text("Oh, baby, can't do this to me, baby! Just gotta get out, just gotta get right outta here!", 550, 600);
textSize(40)
textAlign(RIGHT)
 text("Points: " + (myScore + 10), 800,800);

var string = "I see a little silhouetto of a man. Scaramouche, Scaramouche, will you do the Fandango?"
var regexp = "I'm just a poor boy, nobody loves me. He's just a poor boy from a poor family. Spare him his life from this monstrosity"
var match = match(string, regexp);
text(match, 5, 50);
}
