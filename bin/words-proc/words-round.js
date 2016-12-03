// Requiring the algorithm function.
var countdown_alg = require('./cd-algorithm.js');

module.exports = function(jumble) {

    var wordsArray = [];

    //Test to see if input is an 9 letter string.
    if(jumble && (/^[a-zA-Z]+$/.test(jumble)) && (jumble.length === 9)) {

        wordsArray.words = countdown_alg(jumble);

    }

    return wordsArray;

};