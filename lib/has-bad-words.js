var badWords = require('./bad-words');
var whitelist = require('./whitelist');

module.exports = function hasBadWords(string) {
    string = string || '';
    var badWordsRegexp = new RegExp(badWords.join('|'), 'gi');
    var whitelistRegexp = new RegExp(whitelist.join('|'), 'gi');
    var preparedWhitelist = string.replace(whitelistRegexp, "{whitelist}");
    return badWordsRegexp.test(preparedWhitelist);
};