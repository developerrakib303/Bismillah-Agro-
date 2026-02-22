const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/(title: "[^"]+",)/g, '$1\n                price: 150,');
fs.writeFileSync('index.html', content);
