const fs = require('fs');

const readMd = (path, callback) => {
    const file = fs.readFileSync(path, 'utf8');
    console.log(file);
};
module.exports = readMd;