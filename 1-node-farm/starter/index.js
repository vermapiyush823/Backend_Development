const fs = require('fs');
const http = require('http');

// ************** File System ******************

// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avacado: ${textIn}.\n created on date ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log("Written!!");
// const newText = fs.readFileSync('./txt/output.txt','utf-8');
// console.log(newText);

// *********************************************


// ***************** Server ********************

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName==='/'|| pathName==='/overview'){
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-word'
        });
        res.end('This is the overview');
    }
    else if(pathName==='/product'){
        res.end('This is the product');
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-word'
        });
        res.end('Page not Found!');
    }
})


server.listen(3000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 3000');
})
// *********************************************






