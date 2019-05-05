var next = function() {

    console.log('Next generation running.');
}

var auto = function() {
    if (auto) {
        console.log('Automatic generations paused.');
    }
    else {
        console.log('Automatic generations started.')
    }
    auto = !auto
}

var foodSet = function(amount) {
    foodTotal = amount;
    console.log('Food amount set at ' + amount);
}

var random = function() {

    console.log('Mutations Randomised');
}

var set = function(amount) {

    console.log('Monster count set to ' + amount)
}

var add = function(amount) {

    console.log(amount + ' creatures added.');
}

var remove = function(amount) {
    console.log(amount + ' creatures removed');
    if (amount > creatures.length) {
        amount = creatures.length;
    }
    for (let i = 0; i <  amount; i++) {
        creatures.pop();
    } 
}

var help = function() {
    console.log('next() -> advances to next generation.');
    console.log('auto() -> toggles automatic simulation.');
    console.log('foodSet(amount) -> sets amount of food available on canvas.');
    console.log('random() -> randomises mutations of all creatures.');
    console.log('set(amount) -> sets the amount of creatures.');
    console.log('add(amount) -> adds amount of creatures.');
    console.log('remove(amount) -> removes amount of creatures.');
    console.log('start(amount, foodAmount) -> start simulation with creature amound and food amount.');
}

var start = function(amount,foodAmount) {
    if (g) {
        console.log('Simulation in progress. Please reload page.');
    }
    food = [];
    creatures = [];
    amount = parseInt(amount);
    foodAmount = parseInt(foodAmount)
    for (let i = 0; i < amount; i++) {
        creatures.push(new creature());
    }
    for (let i = 0; i < foodAmount; i++) {
        food.push(new food());
    }
    g = true;
    console.log('Simulation begun, type auto(time in seconds per day) to set automated simualtion.\r\nOr type next() to go to the next generation.');
}