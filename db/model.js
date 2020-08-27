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
	role:{
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
db.sync({

}).then(()=>{
	console.log("db is synced")
})
module.exports={
	db,user
}