const fs = require('fs');

const reader = (path) => {
  // TODO: evaluate path
  const buffer = fs.readFileSync(path, 'utf8');
  let wordsArray = buffer.replace(/\n/g, ' ').split(' ').map(word => word.trim());
  return wordsArray;
};

module.exports = reader;
