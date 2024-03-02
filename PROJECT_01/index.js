const express = require('express');
const users = require('./MOCK_DATA.json')
const PORT = 3000;
const app = express();
const fs = require('fs');

// Middleware
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Hello from M1");
    next()
})

app.use((req,res,next)=>{
    console.log("Hello from M2");
    next();
})




// app.get('/users',(req,res)=>{
//     const html = `
//     <ul>
//         ${
//             users.map((user)=>`<li>${user.first_name}</li>`).join('')
//         }
//     </ul>
//     `;
//     res.send(html);
// }) 

// Routes
app.get('/api/users',(req,res)=>{
    res.setHeader("X-name","Piyush");

    return res.json(users);
})

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user)
})

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user)
}).patch((req,res)=>{
    // Update user details
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body);
    const user = users.find((user)=>user.id===id);
    user.gender = body.gender;
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"sucess",id:id});
    }
    )
}).delete((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    users.splice(users.indexOf(user),1);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"sucess",id:id});
    }
    )
})

app.post('/api/users',(req,res)=>{
    // Add new user
    const body = req.body;
    console.log("Body",body);
    users.push({...body,id:users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:'Success',id:users.length})
    });
});

// app.patch('/api/users/:id',(req,res)=>{
//     // Update user details
//     return res.json({status:'pending'});
// })
// app.post('/api/users/:id',(req,res)=>{
//     // Delete user 
//     return res.json({status:'pending'});
// })



app.listen(PORT,()=>{console.log(`Server started on port : ${PORT}`)})