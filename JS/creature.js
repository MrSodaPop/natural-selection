var creature = function() {
        
    this.home_x = Math.round(Math.random()) * 600;
    this.home_y = Math.floor(Math.random() * 600);

    this.x = this.home_x;
    this.y = this.home_y;

    this.target = null;

    this.energy = 1000;
    this.speed = 1;
    this.sense = 30;
    this.size = 1;
}

var food = function() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 600);
}

var randomMovement = function(creature) {
    var d = energyToDistance(50+Math.floor(Math.random() * 50),creature);
    var moves = [];
    if (creature.x + d < canvasSize) {
        moves.push({
            x:creature.x+d,
            y:creature.y});
    }
    if (creature.x - d > 0) {
        moves.push({
            x:creature.x-d,
            y:creature.y
        })
    }
    if (creature.y + d < canvasSize) {
        moves.push({
            x:creature.x,
            y:creature.y+d
        });
    }
    if (creature.y - d > 0) {
        moves.push({
            x:creature.x,
            y:creature.y-d
        });
    }
    if (creature.x + Math.sqrt(d) < canvasSize) {
        if (creature.y + Math.sqrt(d) < canvasSize) {
            moves.push({
                x:creature.x+Math.sqrt(d),
                y:creature.y+Math.sqrt(d)
            });
        }
        if (creature.y - Math.sqrt(d) > 0) {
            moves.push({
                x:creature.x+Math.sqrt(d),
                y:creature.y-Math.sqrt(d)
            });
        }
    }
    if (creature.x - Math.sqrt(d) > 0) {
        if (creature.y + Math.sqrt(d) < canvasSize) {
            moves.push({
                x:creature.x-Math.sqrt(d),
                y:creature.y+Math.sqrt(d)
            });
        }
        if (creature.y - Math.sqrt(d) > 0) {
            moves.push({
                x:creature.x-Math.sqrt(d),
                y:creature.y-Math.sqrt(d)
            });
        }
    }
    var move = moves[Math.floor(Math.random() * moves.length)];
    return move;
}