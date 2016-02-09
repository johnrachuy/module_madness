var randomizer = require('./random');
var convertCurrency = require('./convert');

var toMoney = function(){
    return convertCurrency(randomizer());
};

var message =  function(){
    return 'Account balance: \n';
};

exports.message = message;
exports.toMoney = toMoney;