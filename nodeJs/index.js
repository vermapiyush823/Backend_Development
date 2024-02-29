// write about file streams and how to use them
const fs = require('fs');
const readStream = fs.createReadStream('log.txt');
const writeStream = fs.createWriteStream('log2.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
})