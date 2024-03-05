const express = require('express');
const users = require('./MOCK_DATA.json')
const PORT = 3000;
const app = express();
const fs = require('fs');
const middlewareM1 = require('./middlewares/index')
const {connectMongoDb} = require('./connection')

const userRouter = require('./routes/user')

// connection ------------------ 
connectMongoDb("mongodb://127.0.0.1:27017/piyushdb");
// -----------------------------


// Middleware -----------------
app.use(express.urlencoded({extended:false}));
// app.use(middlewareM1)
// -----------------------------


// Routes --------------------
app.use("/users",userRouter);
// ------------------------------



app.listen(PORT,()=>{console.log(`Server started on port : ${PORT}`)})