var alien1 = {
    x: 50,
    y:50,
    shown:0
}
var alien2 = {
    x: 90,
    y:50,
    shown:0
}
var alien3 = {
    x: 130,
    y:50,
    shown:0
}
var alien4 = {
    x: 170,
    y:50,
    shown:0
}
var alien5 = {
    x: 210,
    y:50,
    shown:0
}
var alien6 = {
    x: 250,
    y:50,
    shown:0
}

var aliens = [alien1,alien2,alien3,alien4,alien5,alien6];
for(var i=0;i<aliens.length;i++)
var x = 375;
var y = 675;

var lasers = [];

// var color = ["red", "blue"]
// var rColor = random(color)
function setup() {
    createCanvas(800,800);
}
function checkHit(alien,projectile){
    if((alien.x -40)<projectile[0] && (alien.x +40)> projectile[0]){
        if((alien.y -40)<projectile[1] && (alien.y+40)> projectile[1]){
            alien.shown = 1
           
        }
    }
}
function keyPressed(){
    if (keyCode === 32){
         
        lasers.push([x+ 35,y]);
    }}

function draw() {
    
    
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 5;

    } if (keyIsDown(RIGHT_ARROW)) {
        x = x + 5;
    }
    clear();
    background("black");
    for(var i=0;i<aliens.length;i++){
        fill ('green');
        if(aliens[i].shown === 0){
            ellipse(aliens[i].x,aliens[i].y,25,25);
        }
    }
    fill("gold");
    rect(x, y, 70, 20);
    
    
    fill("red")
    rect(x + 32, y-19, 10,20);
    for(var c =0;c<(lasers.length)/2;c++){
        lasers[c][1]-=5;
        rect(lasers[c][0],lasers[c][1],20,20);
        checkHit(aliens[0],lasers[c]);
    }
}
