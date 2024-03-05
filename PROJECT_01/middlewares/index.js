function middlewareM1(){
    return (req,res,next)=>{
        console.log("Hello from M1");
        next()
    };
} 

module.exports = {middlewareM1};