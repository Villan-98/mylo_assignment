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
router.get('/signIn',(req,res)=>{
	res.send("Please send post request on auth/signIn with proper credential")
})
router.post('/signIn',passport.authenticate('local',{
	successRedirect:'/api/home',
	failureRedirect:'/auth/signIn'
}))
module.exports=router