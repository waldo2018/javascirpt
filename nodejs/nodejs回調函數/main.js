const fs = require('fs');

// 異步讀取
fs.readFile('input.txt', function(err, data) {
    if(err) {
        console.log(err.message);
    }
    console.log(data.toString() + 'readFile');
});

// 同步讀取
var data = fs.readFileSync('input.txt');
console.log(data.toString() + 'readFileSync');