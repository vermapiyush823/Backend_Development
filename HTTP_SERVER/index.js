// const http = require("http");
// const fs = require("fs");
// const url = require('url');

// HTTP SERVER 
// const myServer = http.createServer((req,res)=>{
//     const log = `${Date.now()} ${req.url} New Req Reciebved\n`
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch (req.url) {
//             case '/':
//                 res.end('home page');
//                 break;
//             case '/about':
//                 res.end('about page');
//                 break;
//             default:
//                 res.end('error 404!');
//                 break;
//         }
//     })
// });




    

// URL 
// const myServer = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") {
//     return res.end();
//   }
//   const log = `${Date.now()} ${req.url} New Req Recieved`;
//   const myUrl = url.parse(req.url,true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("home page");
//         break;
//       case "/about":
//         const username = myUrl.query.name;
//         const age = myUrl.query.age;
//         res.end(`Hi, ${username} you are ${age} years old!`);
//         break;
//       default:
//         res.end("error 404!");
//         break;
//     }
//   });
// });

// HTTP METHODS
// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") {
//       return res.end();
//     }
//     const log = `${Date.now()} ${req.url} New
//     Req Recieved`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case "/":
//                 res.end("home page");
//                 break;
//             case "/about":
//                 const username = myUrl.query.name;
//                 const age = myUrl.query.age;
//                 res.end(`Hi, ${username} you are ${age} years old!`);
//                 break;
//             case "/signup":
//                 if(req.method==="GET"){
//                     res.end("Sign up page");
//                 }
//                 else if(req.method==="POST"){
//                     res.end("Sign up successful!");
//                 }
//                 break;
//             default:
//                 res.end("error 404!");
//                 break;
//         }

//     });
//     });

// myServer.listen(3000, () => console.log("Server started"));

  

// Express

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.end("Hello from home page");
})
app.get('/about',(req,res)=>{
    return res.end("Hello from about page");
})
app.get('/detail',(req,res)=>{
    return res.end("Hey "+req.query.name+"you are"+req.query.age);
})

const port = 3000
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})