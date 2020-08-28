const {rpMap,role,permission}=require('../db/model')

module.exports={
	addMapping:async(data)=>{
		//console.log(data);
		let roleResponse=await role.findOne({
			where:{
				value:data.role
			}
		})
		if(!roleResponse )
		{
			throw new Error("Sorry this role is not added yet")
		}
		let permissionResponse=await permission.findOne({
			where:{
				value:data.permission
			}
		})
		if(!permissionResponse )
		{
			throw new Error("Sorry this permission is not added yet")
		}
		return rpMap.create({
			roleId:roleResponse.dataValues.id,
			permissionId:permissionResponse.dataValues.id
		})
	}
}