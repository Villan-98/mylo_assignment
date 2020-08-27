const router=require('express').Router()
const user=require('../controller/user')
router.post('/signUp',(req,res)=>{
	console.log(req.body)
	user.insertUser(req.body)
		.then((addedUser)=>{
			res.status(201).json(addedUser);
		})
		.catch((err)=>{
			//console.log(err)
			res.status(500).json({message:err.message})
		})
})
module.exports=router