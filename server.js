const express=require('express');
const app=express();
const db=require('./db/model')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth',require('./route/auth'))
app.use('/permission',require('./route/permission'))
app.listen(3000,()=>
	console.log("http://localhost:3000")
)