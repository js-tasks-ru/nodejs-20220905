const zlib = require('node:zlib');
const fs = require('node:fs');

const fileIn = fs.createReadStream('ipsum.txt');
const fileOut = fs.createWriteStream('ipsum.txt.gz', { flags: 'wx' });

const gzip = zlib.createGzip();

fileIn.on('data', chunk => {
    gzip.write(chunk);
});

gzip.on('data', chunk => {
    fileOut.write(chunk);
});

fileIn.on('end', () => {
    gzip.end();
});

gzip.on('end', () => {
    fileOut.end();
});