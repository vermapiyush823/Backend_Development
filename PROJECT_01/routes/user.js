const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  changeUserInfo,
  deleteUserById,
  addNewUser,
} = require("../controller/user");

// router.get('/',async(req,res)=>{
//     const data = await  User.find({});
//     const html = `
//     <ul>
//         ${
//             data.map((user)=>`<li>${user.firstName + " "+user.lastName + " : "+user.email}</li>`).join('')
//         }
//     </ul>
//     `;
//     res.send(html);
// })

router.route("/").get(getAllUsers).post(addNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(changeUserInfo)
  .delete(deleteUserById);

// app.patch('/api/users/:id',(req,res)=>{
//     // Update user details
//     return res.json({status:'pending'});
// })
// app.post('/api/users/:id',(req,res)=>{
//     // Delete user
//     return res.json({status:'pending'});
// })


module.exports = router;