// const fs = require('fs');

// // Synchronous
// fs.writeFileSync("./test.txt","Hello sync");

// // Asynchronous
// fs.writeFile("./test.text","Hello async",(err)=>{});

// // Synchronous
// const res =  fs.readFileSync("./demo.text","utf-8");
// console.log(res);

// // Asynchronous
// fs.readFile("./demo.text","utf-8",(err,res)=>{
//     if(err){
//         console.log(`${err}`);
//     }
//     else{
//         console.log(res)
//     }
// })

// // Synchronous
// fs.appendFileSync("./text.txt",`${Date.now()} Hey There\n`);


// // Copy file
// fs.copyFileSync("./text.txt","./copy.txt");

// // Delete File
// fs.unlinkSync("./copy.txt");

// // Get details of File
// console.log(fs.statSync("./text.txt"));
