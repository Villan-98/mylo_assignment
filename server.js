const express=require('express');
const app=express();
const route=express.Router()
app.get('/',(req,res)=>{
	res.send("hello")
})
app.listen(3000,()=>
	console.log("localhost:3000")
)