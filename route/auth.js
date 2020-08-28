const router=require('express').Router()
const user=require('../controller/user')
const passport=require('passport')
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
router.post('/signIn',passport.authenticate('local',{
	successRedirect:'/home',
	failureRedirect:'/user/signIn'
}))
module.exports=router