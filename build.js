// Origami Studio: builds index.html (the standalone page GitHub Pages serves) from studio.html.
//   node build.js
const fs = require('fs'), path = require('path');
const HEAD = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  '<style>body{margin:0}img{max-width:100%}</style>\n</head>\n<body>\n';
const page = () => HEAD + fs.readFileSync(path.join(__dirname, 'studio.html'), 'utf8') + '\n</body>\n</html>\n';
const build = () => { fs.writeFileSync(path.join(__dirname, 'index.html'), page()); console.log('index.html written'); };
module.exports = { page, build };
if (require.main === module) build();
