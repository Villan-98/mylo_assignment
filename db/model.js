const Sequelize=require('sequelize')
const datatype=Sequelize.DataTypes;
const dbConfig=require('../config').db
const db=new Sequelize(dbConfig.dbName,dbConfig.dbUser,dbConfig.dbPassword,{

	dialect:'mysql'
})
const user=db.define('user',{
	id:{
		autoIncrement:true,
		primaryKey:true,
		type:datatype.INTEGER
	},
	name:{
		type:datatype.STRING,
		allowNull:false
	},
	password:{
		type:datatype.STRING,
		allowNull:false
	}
},
{
	timestamps:false
})
const permission=db.define('permission',{
	id:{
		autoIncrement:true,
		primaryKey:true,
		type:datatype.INTEGER
	},
	value:{
		type:datatype.STRING,
		allowNull:false,
		unique:true,
	}
},
{
	timestamps:false
})
const role=db.define('role',{
	id:{
		autoIncrement:true,
		primaryKey:true,
		type:datatype.INTEGER
	},
	value:{
		type:datatype.STRING,
		unique:true,
		allowNull:false
	}
},
{
	timestamps:false
})
const rpMap=db.define('rpMap',{
	
},
{
	timestamps:false
})
rpMap.belongsTo(permission,{
	foreignKey:{
	allowNull:false,
	primaryKey:true

}
});
rpMap.belongsTo(role,{
	foreignKey:{
	allowNull:false,
	primaryKey:true}

});
rpMap.removeAttribute('id');
user.belongsTo(role);
db.sync({
	//force:true
	//alter:true
}).then(()=>{
	console.log("db is synced")
})
module.exports={
	db,user,permission,rpMap,role
}