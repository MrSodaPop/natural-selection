var g = false;
var auto = true;
var creatures = [];
var foods = [];
var foodTotal = 0;
var canvasSize = 600;

var setup = function() {
    createCanvas(canvasSize,canvasSize);
    frameRate(30);
    

}

var draw = function() {
    background(51);
    if (!g) {
        noLoop();
    }
    for (let i = 0; i < foods.length; i++) {
        fill(50,250,50);
        circle(foods[i].x,foods[i].y,5);
    }
    for (let i = 0; i < creatures.length; i++) {
        fill(map(creatures[i].speed,0,5,0,255),0,map(creatures[i].size,0,5,0,255));
        circle(creatures[i].x,creatures[i].y,creatures[i].size * 10);
    }
}

var move = function(c,i) { // c = creature, i = index;
        if (c.energy <= 0) {
                return false;
        }
        if (objectDistance(c,c.target) > c.sense) {
                c.target = null;
        }
        for (let i = 0; i < foods.length; i++) {
                if (objectDistance(c.target,c) > objectDistance(foods[i],c)) {
                        c.target = foods[i];
                }
        }
        for (let i = 0; i < creatures.length; i++) {
                if (objectDistance(c.target,c) > objectDistance(creatures[i],c) && c.size >= creatures[i].size * 1.2) {
                        c.target = creatures[i];
                }
        }
        if (c.target == null) {
                c.target = randomMovement(c);
        }
        let d = objectDistance(c,c.target);
        if (c.target.x < c.x) {
                c.x = c.x - (c.x - c.target.x) * c.speed / d;
                if (c.target.y < c.y) {
                        c.y = c.y - (c.y - c.target.y) * c.speed / d;
                }
                else {
                        c.y = c.y - (c.target.y - c.y) * c.speed / d;
                }
        }
        else {
                c.x = c.x + (c.x - c.target.x) * c.speed / d;
                if (c.target.y < c.y) {
                        c.y = c.y - (c.y - c.target.y) * c.speed / d;
                }
                else {
                        c.y = c.y - (c.target.y - c.y) * c.speed / d;
                }
        }
        if (Math.abs(c.x-c.target.x) < c.speed && Math.abs(c.y-c.target.y) < c.speed) {
                c.x = c.target.x;
                c.y = c.target.y;
        }
        if (c.x === c.target.x && c.y === c.target.y) {
                consume(c,c.target);
        }
}

var clock = function() {
        for (let i = 0; i < creatures.length; i++) {
                move(creatures[i],i);
        }
}

var energyToDistance = function(energy, creature) {
        let distance = 0;
        distance = energy / (creature.speed * creature.size);
        return distance;
}

var objectDistance = function(a,b) {
        return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2);
}