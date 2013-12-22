var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]).toString();
var lineArray = buffer.split("\n");
console.log(lineArray.length-1);