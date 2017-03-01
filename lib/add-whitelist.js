var whitelist = require('./whitelist');

module.exports = function addWords(newWhitelist) {
    for (var i = 0; i < newWhitelist.length; i++) {
        whitelist.push(newWhitelist[i]);
    }
};