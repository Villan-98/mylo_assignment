const router=require('express').Router()
const ctrlRole=require('../../controller/role')
const ctrlMapping=require('../../controller/mapping')
router.post('/',(req,res)=>{
	ctrlRole.addRole(req.body)
		.then((addedRole)=>{
			res.status(201).json(addedRole)
		})
		.catch((err)=>{
			res.status(500).json({
				message:err.message
			})
		})
})
router.use('/mapping',(req,res,next)=>{
	if(!req.user)
	{
		res.status(401).json({
				message:"Unauthorize access"
			})
	}
	ctrlRole.getRoleById({roleId:req.user.dataValues.roleId})
	.then((roleResponse)=>{
		console.log(roleResponse)
		if(roleResponse.dataValues.value!='admin')
		{
			res.status(401).json({
				message:"Unauthorize access"
			})
		}

		next();	
	})
	.catch((err)=>{
		res.status(500).json({

				message:err.message
			})
	})
})
router.post('/mapping',(req,res)=>{
	
	ctrlMapping.addMapping(req.body)
		.then((addedMap)=>{
			res.status(201).json(addedMap)
		})
		.catch((err)=>{
			console.log(err.message)
			res.status(500).json({

				message:err.message
			})
		})
})
module.exports=router