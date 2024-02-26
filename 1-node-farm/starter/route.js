const requestHandler = (req,res)=>{
    const pathName = req.url;
    if(pathName==='/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('<h1>This is the overview</h1>');
    }
    else if(pathName==='/add'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(`<h1>Addition is ${add(1,2)} </h1>`);
    }
}

const add = (a,b)=>{
    return a+b;
}


module.exports = {
    hand: requestHandler,
    text: 'Hello',
    num: 23,
    sum:add
}
