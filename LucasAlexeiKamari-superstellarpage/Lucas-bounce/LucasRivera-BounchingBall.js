
var x = 50
var y = 50
var vy = 10
var vx = 15

function setup() {
    createCanvas(300, 300);
}var circle1 = {radius: 20, x: 5, y: 5};{
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius);

}
function draw(){
    background("black")
    fill("white")
    ellipse(x, y, 25, 25);
if ( x >=300-25){
    vx = -vx;
} else if ( x <= 0 +25) {
    vx = -vx;



}
x = x +vx;
// if ( y >= 300-25){
//     vy = -vy;
// } else if (y <= 0 + 25) {
//     vy = -vy;
// }
y = y + vy

}