const {permission}=require('../db/model')
module.exports={
	addPermission:async(data)=>{
		// console.log(data)
		// console.log("hello")
		if(!data.permission)
		{
			throw new Error("Please send the permission value you want to insert")
		}
		return permission.create({
			value:data.permission
		})
	}
}