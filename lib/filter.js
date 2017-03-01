var badWords = require('./bad-words');
var whitelist = require('./whitelist');

module.exports = function filter(string) {
  string = string || '';
  var badWordsRegexp = new RegExp(badWords.join('|'), 'gi');
  var whitelistRegexp = new RegExp(whitelist.join('|'), 'gi');
  var whitelistWords = [];
  var preparedWhitelist = string.replace(whitelistRegexp, function (str) {
    whitelistWords.push(str);
    var index = whitelistWords.length - 1;
    return "{whitelist}";
  });

  var replacedBadWords = string.replace(badWordsRegexp, function (str) {
    var replace_str = '';
    for (var i = 0; i < str.length; ++i) {
      replace_str = replace_str + '*';
    }
    return replace_str;
  });

  var whitelistIndex = 0;
  return replacedBadWords = string.replace("{whitelist}", function (str) {
    var replace_str = whitelistWords[whitelistIndex];
    ++whitelistIndex;
    return replace_str;
  });
};