const http = require("http");
const fs = require("fs");
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

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()} ${req.url} New Req Recieved`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        res.end("about page");
        break;
      default:
        res.end("error 404!");
        break;
    }
  });
});

myServer.listen(3000, () => console.log("Server started"));
