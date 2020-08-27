const {user}=require('../db/model')
module.exports={
	insertUser:async(data)=>{
		if(!data.name || !data.role || !data.password)
		{
			throw new Error("Please provide all credential");
		}
		return user.create({
			name:data.name,
			role:data.role,
			password:data.password,
		})
	}
}