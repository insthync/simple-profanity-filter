# simple-profanity-filter-with-whitelist

A very simple JS profanity filter. Replaces profanity with asterisk. The module currently uses the Google list of bad words as default. Adding/replacing the dictionary coming soon.

## Installation

```
npm install --save simply-profanity-filter-with-whitelist
```

## Usage

```javascript
var profanityFilter = require('simply-profanity-filter-with-whitelist');

// simple filtering
var filtered_string = profanityFilter.filter("Some bad words, bitch!");
console.log(filtered_string); // "Some bad words, *****!"

// add some custom bad words
profanityFilter.addWords(["custom", "bad", "words"]);
var filtered_string = profanityFilter.filter("Some custom bad words, bitch!");
console.log(filtered_string); // "Some ****** *** *****, *****!"

// replace bad words list with new list
profanityFilter.replaceWords(["custom", "bad", "words"]);
var filtered_string = profanityFilter.filter("Some custom bad words, bitch!");
console.log(filtered_string); // "Some ****** *** *****, bitch!"

// add whitelist
profanityFilter.replaceWords(["custom", "bad", "words"]);
profanityFilter.addWhitelist(["Notbadwords"]);
var filtered_string = profanityFilter.filter("Some custom bad words and Notbadwords, bitch!");
console.log(filtered_string); // "Some ****** *** ***** and Notbadwords, bitch!"

// has bad words
profanityFilter.replaceWords(["custom", "bad", "words"]);
profanityFilter.addWhitelist(["Notbadwords"]);
var has_bad_words = profanityFilter.hasBadWords("Some Notbadwords, bitch!");
console.log(has_bad_words); // false
```
