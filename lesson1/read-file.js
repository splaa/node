var fs = require('fs');
// var content = fs.readFileSync('file.txt');
fs.readFile('file.txt', function(err, content){
console.log(decodeURIComponent(content));
});

console.log('The End'); 