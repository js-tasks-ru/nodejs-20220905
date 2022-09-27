const fs = require('node:fs');

// const file = fs.createReadStream('text.txt', {
//     highWaterMark: 11,
// });

// const arr = [];

// file.on('data', chunk => {
//     console.log(chunk);
//     arr.push(chunk);
// });

// file.on('end', () => {
//     console.log(Buffer.concat(arr).toString());
// });

fs.readFile('bigimage.jpeg', (err, content) => {
    console.log(content);
});