const {role}=require('../db/model')
module.exports={
	addRole:(data)=>{
		if(!data.role)
		{
			throw new Error("Please send role value")
		}
		return role.create({
			value:data.role
		})
	},
	getRoleById:(data)=>{
		console.log(data)
		if(!data.roleId)
		{
			throw new Error("please send role id");
		}
		return role.findOne({
			where:{
				id:data.roleId
			}
		})
	}
}