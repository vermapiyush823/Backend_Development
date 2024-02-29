const express = require('express');
const users = require('./MOCK_DATA.json')
const PORT = 3000;
const app = express();
const url = require('url');
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
    return res.json({status:'pending'});
}).delete((req,res)=>{
    // Delete user 
    return res.json({status:'pending'});
})

app.post('/api/users',(req,res)=>{
    // Add new user
    const body = req.body;
    return res.json({status:'pending'});
})

// app.patch('/api/users/:id',(req,res)=>{
//     // Update user details
//     return res.json({status:'pending'});
// })
// app.post('/api/users/:id',(req,res)=>{
//     // Delete user 
//     return res.json({status:'pending'});
// })


app.listen(PORT,()=>{console.log(`Server started on port : ${PORT}`)})