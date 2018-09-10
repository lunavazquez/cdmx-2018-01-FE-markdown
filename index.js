const reader = require('./reader');
const analizer = require('./analizer');

const wordsArray = reader('./README.md');
const urls = analizer(wordsArray);
console.log(urls);
