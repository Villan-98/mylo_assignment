const router=require('express').Router()
const rpMap=require('../db/model')
const ctrlPermission=require('../controller/permission')
router.get('/',(req,res)=>{

	//if user is non-permium
	if(!req.user)
	{
		res.status(200).json({
			data:"basic"
		})
	}
	//if user is permium
	ctrlPermission.getUserPermissions(req.user.dataValues)
		.then((data)=>{
			res.status(200).json(data)
		})
		.catch((err)=>{
			res.status(500).json({
				message:err.message
			})
		})
})
module.exports=router