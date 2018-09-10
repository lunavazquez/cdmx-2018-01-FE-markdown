
const fs = require('fs');

const readMd = (path, callback) => {
  const file = fs.readFileSync(path, 'utf8');
  console.log(file);
};
module.exports = readMd;

// leer linas
const readLine = (err, data) => {
  if (err) {
    console.log('No tienes Readme.md')
  } else {
    let lines = data.split('\n').length;
    console.log('El archivo tiene:' + lines + ' lineas')
  }
}
fs.readFile('./Readme.md', 'utf8', readLine);
module.exports = {
  readLine
};

// if (err) {
//   console.log('no tienes readme.md');
// } else {
//   let line = data.split('\n').lenght;
//   const html = markdown.toHTML(data.toString());
//   console.log(typeof html);
//   console.log('El archivo tiene :' + line + 'lines');
//   // return line + '' + 'lines';
// }
// };
// module.exports = readLine;
// fs.readFile('./README.md', 'utf8', readLine);

