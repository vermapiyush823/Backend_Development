const express = require('express');
const users = require('./MOCK_DATA.json')
const PORT = 3000;
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

// Schema ---------------------

mongoose.connect("mongodb://127.0.0.1:27017/piyushdb")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("Mongo Err",err));
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,

    },
    gender:{
        type:String,
    },
},{timestamps:true}) 

const User = mongoose.model("user",userSchema); 

// ----------------------------



// Middleware -----------------
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Hello from M1");
    next()
})

app.use((req,res,next)=>{
    console.log("Hello from M2");
    next();
})

// -----------------------------





// Routes --------------------

app.get('/users',async(req,res)=>{
    const data = await  User.find({});
    const html = `
    <ul>
        ${
            data.map((user)=>`<li>${user.firstName + " "+user.lastName + " : "+user.email}</li>`).join('')
        }
    </ul>
    `;
    res.send(html);
}) 


app.get('/api/users',async(req,res)=>{
    const data = await  User.find({});
    // res.setHeader("X-name","Piyush");
    return res.json(data);
})

app.get('/api/users/:id',async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json(user)
})

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user)
}).patch(async(req,res)=>{
    // Update user details
    await User.findByIdAndUpdate(req.params.id,{lastName:'Changed'});
    return res.json({status:'success'});
}).delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:'deleted'});
})

app.post('/api/users',async(req,res)=>{
    // Add new user
    const body = req.body;
    console.log("Body",body);
    if (!body
        ||!body.first_name
        ||!body.last_name
        ||!body.email
        ||!body.gender
        ||!body.job_title)
    {
        return res.status(400).json({msg:"All fields required"});
    }
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    });
    console.log(result)
    return res.status(201).json({msg:'success'});
});

// app.patch('/api/users/:id',(req,res)=>{
//     // Update user details
//     return res.json({status:'pending'});
// })
// app.post('/api/users/:id',(req,res)=>{
//     // Delete user 
//     return res.json({status:'pending'});
// })

// ------------------------------



app.listen(PORT,()=>{console.log(`Server started on port : ${PORT}`)})