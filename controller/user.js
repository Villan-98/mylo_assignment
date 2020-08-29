const {user,role}=require('../db/model');
const bcrypt=require('bcrypt');
const saltRounds=require('../config').saltRounds;

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
		bcrypt.hash(data.password, saltRounds, function(err, hashedpassword) {
			    console.log(hashedpassword)
			    return user.create({
				name:data.name,
				roleId:roleResponse.dataValues.id,
				password:hashedpassword,
			})
		});
		
		//throw new Error("hi user");
	}
}