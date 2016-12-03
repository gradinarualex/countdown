const fs = require('fs');

module.exports = function () {
    try {
        return JSON.parse(fs.readFileSync('dictionary.json'));
    } catch(e) {
        return [];
    };
};

