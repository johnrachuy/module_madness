var randomizer = function(){
    var randomNumber = Math.floor(Math.random() * (1000000 - 100 + 1)) + 100;
    randomNumber = randomNumber.toString();
    return randomNumber;
};

module.exports = randomizer;