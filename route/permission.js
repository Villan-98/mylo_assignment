const router=require('express').Router()
const ctrlPermission=require('../controller/permission')
router.post('/',(req,res)=>{
		ctrlPermission.addPermission(req.body)
		.then((addedPer)=>{
			res.status(200).json(addedPer)
		})
		.catch((err)=>{
			res.status(500).json({
				message:err.message
			})
		})
})
module.exports=router