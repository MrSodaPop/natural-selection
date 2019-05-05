var next = function() {

    console.log('Next generation running.');
}

var auto = function(fps) {
    if (auto) {
        console.log('Automatic generations disabled.');
        clearInterval(clock);
    }
    else {
        console.log('Automatic generations enabled.')
        if (g) {
            setInterval(clock(),parseInt(1000/fps));
        }
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
    console.log('auto(fps) -> toggles automatic simulation.');
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
        return;
    }
    if (!!!amount|| !!!foodAmount) {
        console.log('Invalid Input. \r\nAll simulations must have at least 1 creature and food.\r\nPlease try again.');
        return;
    }
    amount = parseInt(amount);
    foodAmount = parseInt(foodAmount);

    foods = [];
    creatures = [];
    amount = parseInt(amount);
    foodAmount = parseInt(foodAmount)
    for (let i = 0; i < amount; i++) {
        creatures.push(new creature());
    }
    for (let i = 0; i < foodAmount; i++) {
        foods.push(new food());
    }
    g = true;
    foodTotal = foodAmount;
    if (auto) {
        setInterval(clock(),parseInt(1000/fps));
    }
    loop();
    console.log('Simulation begun, type auto(time in seconds per day) to set automated simualtion.\r\nOr type next() to go to the next generation.');
}