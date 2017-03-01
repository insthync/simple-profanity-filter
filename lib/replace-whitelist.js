var whitelist = require('./whitelist');

module.exports = function replaceWhitelist(newWhitelist) {
    whitelist.length = 0;
    whitelist.push.apply(whitelist, newWhitelist);
};