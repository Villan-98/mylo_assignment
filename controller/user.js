const {user,role}=require('../db/model')
module.exports={
	addUser:async(data)=>{
		if(!data.name || !data.role || !data.password)
		{
			throw new Error("Please provide all credential");
		}
		let roleResponse= await role.findOne({
			where:{
				value:data.role
			}
		})
		if(!roleResponse)
			throw new Error("Role not valid")
		console.log(roleResponse);
		return user.create({
			name:data.name,
			roleId:roleResponse.dataValues.id,
			password:data.password,
		})
		//throw new Error("hi user");
	}
}