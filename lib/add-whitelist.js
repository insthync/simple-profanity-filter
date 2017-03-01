var whitelist = require('./whitelist');

module.exports = function addWhitelist(newWhitelist) {
    for (var i = 0; i < newWhitelist.length; i++) {
        whitelist.push(newWhitelist[i]);
    }
};