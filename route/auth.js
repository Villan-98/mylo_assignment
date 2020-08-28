const router=require('express').Router()
const user=require('../controller/user')
router.post('/signUp',(req,res)=>{
	console.log("hello dear")
	user.addUser(req.body)
		.then((addedUser)=>{
			res.status(201).json(addedUser);
		})
		.catch((err)=>{
			res.status(500).json({message:err.message})
		})
})
module.exports=router