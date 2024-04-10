// // write about file streams and how to use them
// const fs = require('fs');
// const readStream = fs.createReadStream('log.txt');
// const writeStream = fs.createWriteStream('log2.txt');
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// })

const router = require("./router");

const express = require("express");
const app = express();

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
