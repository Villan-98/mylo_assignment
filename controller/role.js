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
	}
}