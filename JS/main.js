var g = false;
var auto = false;
var creatures = [];
var food = [];
var foodTotal = 0;

var setup = function() {
    createCanvas(600,600)
    frameRate(30);
    

}

var draw = function() {
    background(51);
    if (!g) {
        pause();
    }
    if (auto) {

    }
    for (let i = 0; i < foodTotal.length; i++) {
            stroke(55)
            fill();
            elipse(10,10,food[i].x,food[i],y);
    }
}

var creature = function() {
    this.home_x = Math.floor(Math.random() * 600);
    this.home_y = Math.round(Math.random() * 600);
    this.x = this.home_x;
    this.y = this.home_y;
    this.energy = 1000;
    this.speed = 2;
    this.sense = 30;
    this.size = 1;
}

var food = function() {
    this.x = Math.floor(Math.random() * 600);
    this.y = math.floor(Math.rabdom() * 600)
}

var move = function() {
    
}