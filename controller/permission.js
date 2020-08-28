const {permission,rpMap}=require('../db/model')
module.exports={
	addPermission:async(data)=>{
		if(!data.permission)
		{
			throw new Error("Please send the permission value you want to insert")
		}
		return permission.create({
			value:data.permission
		})
	},
	getUserPermissions:async(data)=>{
		let mapResponse=await rpMap.findAll({
			attributes:['permissionId'],
			where:{
				roleId:data.roleId
			}
		})
		let pid=[]	//to store the ids of permission that user have
		mapResponse.forEach((ele)=>{
			pid.push(ele.dataValues.permissionId)
		}
		return permission.findAll({
			where:{
				id:pid
			}
		})
	}
}